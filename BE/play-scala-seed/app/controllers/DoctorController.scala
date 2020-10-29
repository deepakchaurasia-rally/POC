package controllers

import javax.inject._

import models._
import play.api.data.Form
import play.api.data.Forms._
import play.api.data.validation.Constraints._
import play.api.libs.json.Json
import play.api.mvc._
import scala.concurrent.{ExecutionContext, Future}

class DoctorController @Inject()(repo: DoctorRepository,
                                 cc: MessagesControllerComponents
                                )(implicit ec: ExecutionContext)
  extends MessagesAbstractController(cc) {

  def addDoctors = Action.async { implicit request =>
    repo.createSchemaIfNotExists().map { _ =>
      Ok("DB Populated");
    }
  }

  def getDoctors = Action.async { implicit request =>
    repo.list().map { doctor =>
      Ok(Json.toJson(doctor))
    }
  }
}