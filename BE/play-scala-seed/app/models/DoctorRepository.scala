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

  /*
  val setup = DBIO.seq(
  // Create the tables, including primary and foreign keys
  (suppliers.schema ++ coffees.schema).create,

  // Insert some suppliers
  suppliers += (101, "Acme, Inc.",      "99 Market Street", "Groundsville", "CA", "95199"),
  suppliers += ( 49, "Superior Coffee", "1 Party Place",    "Mendocino",    "CA", "95460"),
  suppliers += (150, "The High Ground", "100 Coffee Lane",  "Meadows",      "CA", "93966"),
  // Equivalent SQL code:
  // insert into SUPPLIERS(SUP_ID, SUP_NAME, STREET, CITY, STATE, ZIP) values (?,?,?,?,?,?)

  // Insert some coffees (using JDBC's batch insert feature, if supported by the DB)
  coffees ++= Seq(
    ("Colombian",         101, 7.99, 0, 0),
    ("French_Roast",       49, 8.99, 0, 0),
    ("Espresso",          150, 9.99, 0, 0),
    ("Colombian_Decaf",   101, 8.99, 0, 0),
    ("French_Roast_Decaf", 49, 9.99, 0, 0)
  )
  // Equivalent SQL code:
  // insert into COFFEES(COF_NAME, SUP_ID, PRICE, SALES, TOTAL) values (?,?,?,?,?)
)
  
  */

  def createSchemaIfNotExists(): Future[Unit] = {
    val setup = DBIO.seq(
      doctorTable.schema.create,
      doctorTable ++= Doctor.listDoctors()
    )
    db.run(setup)
  }
  
  def list(): Future[Seq[Doctor]] = db.run {
    doctorTable.result
  }
}
