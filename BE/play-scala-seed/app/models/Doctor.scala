package models

import play.api.libs.json.{Json, OWrites, Reads}

case class Doctor(firstName: String, lastName: String, designation: String, specialist: String, address: String, phoneNo: Long)

object Doctor extends {

  val doctors = List(
    Doctor("Abc", "Xyz", "MD", "Ent", "1st street gurgaon", 9876543219L),
    Doctor("Deepak", "Chaurasia", "MR", "Surgeon", "1st street gurgaon", 9876543219L),
    Doctor("Test", "Dummy", "Consultant", "Caretaker", "1st street gurgaon", 9876543219L),
    Doctor("Jest", "React", "Physician", "MPhil", "1st street noida", 9876543219L),
    Doctor("Scala", "Learn", "ENT", "Dummy", "sec 78 street noida", 9876543219L),
  )


  implicit val readDoctor: Reads[Doctor] = Json.reads[Doctor]

  implicit val writeDoctor: OWrites[Doctor] = Json.writes[Doctor]

 }