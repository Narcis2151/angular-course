import { Component } from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  onCourseViewed(course: Course) {
    console.log("App Component - Course Card Clicked: ", course);
  }
  courses = COURSES;
}
