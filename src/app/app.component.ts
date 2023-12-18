import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
} from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";
import { CourseCardComponent } from "./course-card/course-card.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements AfterViewInit {
  courses = COURSES;

  @ViewChildren(CourseCardComponent, { read: ElementRef })
  cards: QueryList<CourseCardComponent>;

  onCourseViewed(course: Course) {
    console.log("App Component - Course Card Clicked: ", course);
  }

  ngAfterViewInit(): void {
    this.cards.changes.subscribe((cards) => {
      console.log(cards);
    });
  }

  onAddCourse() {
    this.courses.push({
      id: 5,
      description: "Angular Testing Course",
      iconUrl: "https://angular.io/assets/images/logos/angular/angular.svg",
      longDescription:
        "In-depth guide to Unit Testing and E2E Testing of Angular Applications",
      category: "ADVANCED",
      lessonsCount: 10,
    });
  }
}
