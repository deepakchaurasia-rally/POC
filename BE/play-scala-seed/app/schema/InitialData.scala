//package schema;
//
//import models.doctor.{Room, Speaker, Talk, TalkSpeaker}
//import models.{Speaker, Talk, TalkSpeaker}
//import slick.jdbc.H2Profile.api._
//
//import scala.collection.Seq
//import scala.concurrent.Future;
//
//trait InitialData {
//
//  self: DatabaseSchema =>
//
//  def db: Database
//
//  def insertInitialData(): Future[Unit] = {
//    val queries  = DBIO.seq(
//      votes.delete, talkspeakersQuery.delete, talks.delete, speakers.delete, rooms.delete,
//
//
//      rooms ++= Seq(Room(1, "Room 1"),Room(2, "Room 2")),
//
//      speakers ++= Seq(Speaker(1, "Speaker 1"), Speaker(2, "Speaker2")),
//
//      talks ++= Seq(Talk(1, 1, "Talk 1"), Talk(2, 2, "Talk 2"), Talk(3, 1, "Talk 3")),
//
//      talkspeakersQuery ++= Seq(
//        TalkSpeaker(1, 1),
//        TalkSpeaker(2, 2),
//        TalkSpeaker(2, 1),
//      )
//    )
//
//    db.run(queries);
//  }
//
//
//
//}