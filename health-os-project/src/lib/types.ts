export type MealType="breakfast"|"lunch"|"snack"|"dinner";
export type Meal={id:string;name:string;mealType:MealType;dietType:"vegetarian"|"egg"|"non_vegetarian";calories:number;protein:number;carbs:number;fat:number;fibre:number;gutRisk:"low"|"medium"|"high";ingredients:string[];recipe:string[]};
export type DayPlan={date:string;day:string;meals:Record<MealType,Meal>};