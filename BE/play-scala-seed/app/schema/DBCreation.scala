//package schema
//
//import scala.concurrent.ExecutionContext.Implicits.global;
//import scala.concurrent.duration.Duration;
//import scala.concurrent.{Future, Await}
//import scala.util.Success;
//import slick.jdbc.H2Profile.api._
//
//trait DBCreation {
//
//  self: DatabaseSchema =>
//  def db: Database
//
//  def createSchemaIfNotExists: Future[Unit] = {
//    db.run(allSchemas.create).andThen {
//      case Success(_) => println("Schema created")
//    }
//  }
//
//  def printResult[T](f: Future[Iterable[T]]): Unit = {
//    Await.result(f, Duration.Inf).foreach(println)
//    println()
//  }
//
//}
