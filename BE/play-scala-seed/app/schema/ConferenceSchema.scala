//package schema
//
//import java.time.LocalDateTime
//
//import slick.jdbc.H2Profile.api._
//import models.doctor.__
//import models.doctor.{Room, Speaker, Talk, TalkSpeaker, Vote};
//
//
//trait DatabaseSchema {
//  class Rooms(tag: Tag) extends  Table[Room](tag, "ROOMS") {
//    def id = column[Int]("ID", O.PrimaryKey)
//    def name = column[String]("NAME")
//
//    def * = (id, name) <> (Room.tupled, Room.unapply)
//  }
//
//  val rooms = TableQuery[Rooms];
//
//  class Speakers(tag: Tag) extends  Table[Speaker](tag, "SPEAKERS") {
//    def id = column[Int]("ID", O.PrimaryKey)
//    def name = column[String]("NAME")
//
//    def * = (id, name) <> (Speaker.tupled, Speaker.unapply)
//  }
//
//  val speakers = TableQuery[Speakers]
//
//  class Talks(tag: Tag) extends  Table[Talk](tag, "TALKS") {
//    def id = column[Int]("ID", O.PrimaryKey)
//    def roomId = column[Int]("ROOMID")
//    def title = column[String]("TITLE")
//    // syntax "key", this table column name ,
//    // which table query to be executed )  target table id to be mapped
//    def room = foreignKey("FK_ROOM", roomId, rooms)(_.id)
//
//    def * = (id, roomId, title) <> (Talk.tupled, Talk.unapply)
//  }
//
//  val talks = TableQuery[Talks]
//
//  class TalksSpeakers(tag: Tag) extends  Table[TalkSpeaker](tag, "TALK_SPEAKER") {
//    def talkId = column[Int]("TALK_ID")
//    def speakerId = column[Int]("SPEAKER_ID")
//    def talk = foreignKey("FK_TALK_SPEAKER", talkId, talks)(_.id)
//    def speaker = foreignKey("FK_SPEAKER_TALK", talkId, speakers)(_.id)
//
//    def * = (talkId, speakerId) <> (TalkSpeaker.tupled, TalkSpeaker.unapply)
//  }
//
//  val talkspeakersQuery = TableQuery[TalksSpeakers]
//
//
//  class Votes(tag: Tag) extends  Table[Vote](tag, "VOTES") {
//    def id = column[Int]("ID", O.AutoInc)
//    def talkId = column[Int]("TALK_ID")
//    def castedAt = column[LocalDateTime]("CASTED_AT")
//    def positive = column[Boolean]("POSITIVE")
//    def talk = foreignKey("FK_TALK", talkId, talks)(_.id)
//
//
//
//    def * = (id.?, talkId, castedAt, positive) <> (Vote.tupled, Vote.unapply)
//  }
//
//  val votes = TableQuery[Votes]
//
//  val allSchemas = rooms.schema ++ speakers.schema ++ talks.schema ++ talkspeakersQuery.schema ++ votes.schema
//
//}
