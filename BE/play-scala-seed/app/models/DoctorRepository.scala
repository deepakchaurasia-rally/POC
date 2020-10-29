package models

import javax.inject.{ Inject, Singleton }
import play.api.db.slick.DatabaseConfigProvider
import slick.jdbc.JdbcProfile
import scala.util.Success;

import scala.concurrent.{ Future, ExecutionContext }
import scala.util.Failure

@Singleton
class DoctorRepository @Inject() (dbConfigProvider: DatabaseConfigProvider)(implicit ec: ExecutionContext) {
  private val dbConfig = dbConfigProvider.get[JdbcProfile]

  import dbConfig._
  import profile.api._

  private class DoctorTable(tag: Tag) extends Table[Doctor](tag, "doctor") {

    def firstName = column[String]("firstName")
    def lastName = column[String]("lastName")
    def specialist = column[String]("specialist")
    def address = column[String]("address")
    def designation = column[String]("designation")

    def phoneNo = column[Long]("phoneNo")

    def * = (firstName, lastName, specialist, address, designation, phoneNo) <> ((Doctor.apply _).tupled, Doctor.unapply)
  }

  private val doctorTable = TableQuery[DoctorTable]

  def createSchemaIfNotExists(): Future[Unit] = {
    val setup = DBIO.seq(
      doctorTable ++= Doctor.listDoctors()
    )
    db.run(setup)
  }
  
  def list(): Future[Seq[Doctor]] = db.run {
    doctorTable.result
  }
}
