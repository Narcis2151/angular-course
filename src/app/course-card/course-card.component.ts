import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Course } from "../model/course";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrl: "./course-card.component.css",
})
export class CourseCardComponent {
  @Input({ required: true })
  course: Course;

  @Input()
  index: number;

  @Output()
  courseSelected = new EventEmitter<Course>();

  onCourseViewed() {
    console.log("Course-Card Component clicked...ready to print info");
    this.courseSelected.emit(this.course);
  }
}
