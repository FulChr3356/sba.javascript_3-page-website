import { render } from "@testing-library/react";

 export default class Movie
 {
     construtor(title,releaseDate,starring,review){
         this.title = title;
         this.releaseDate = releaseDate;
         this.starring = starring;
         this.review = review;
        

     }

     setTitle(title){
         this.title = title;     }

     setDate(date){
        this.date = date; 
     }

     setStarring(starring){
         this.starring = starring;
     }

     setReview(){
         var review;
        while(review == null)
            review = prompt("Write a review" );
            this.review = review;
     }


 }

 



