import { render } from "@testing-library/react";

 export default class Movie
 {
     construtor(title,releaseDate,starring,review){
         this.title = title;
         this.releaseDate = releaseDate;
         this.starring = starring;
         this.review = review;
        

     }

     setReview(){
         var review;
        while(review == null)
            review = prompt("Write a review for: " + this.title )
            this.review = review;
     }


 }






