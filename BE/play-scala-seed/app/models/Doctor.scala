package models

import play.api.libs.json._

case class Doctor(firstName: String, lastName: String, specialist: String, address: String, designation: String, phoneNo: Long)

object Doctor {
  implicit val doctorFormat = Json.format[Doctor]
  def listDoctors(): List[Doctor] = List(
    Doctor("Deepak", "Chaurasia", "ENT", "UP, Noida", "MD", 8130440808L),
    Doctor("Deepak", "Chaurasia", "ENT", "UP, Noida", "MD", 8130440808L),
    Doctor("Deepak", "Chaurasia", "ENT", "UP, Noida", "MD", 8130440808L),
    Doctor("Deepak", "Chaurasia", "ENT", "UP, Noida", "MD", 8130440808L),
    Doctor("Deepak", "Chaurasia", "ENT", "UP, Noida", "MD", 8130440808L),
    Doctor("Deepak", "Chaurasia", "ENT", "UP, Noida", "MD", 8130440808L)
  );
}