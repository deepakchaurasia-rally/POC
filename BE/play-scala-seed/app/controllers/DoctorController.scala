package controllers
import javax.inject._
import models.Doctor._
import play.api._
import play.api.i18n.I18nSupport
import play.api.libs.json.Json
import play.api.mvc._

@Singleton
class DoctorController @Inject()(cc: ControllerComponents) extends AbstractController(cc) with I18nSupport{

  def getDoctors() = Action { implicit request: Request[AnyContent] =>
    Ok(Json.toJson(doctors))
  }
}