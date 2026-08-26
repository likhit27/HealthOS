import {State,Profile,Journal,MealLog} from "@/lib/types";import {generateWeek} from "@/lib/engine/planner";
export const defaultProfile:Profile={name:"Likhit",age:31,heightCm:175.3,weightKg:58,goalWeightKg:65,proteinMin:90,proteinMax:100,calorieTarget:2200,fibreTarget:25,maxEggsPerDay:4,mostlyVegetarian:true,pureVegDays:["Tuesday"],noDalMeals:["lunch","dinner"],gutFriendlyMode:true};
export function empty():State{return{profile:defaultProfile,week:generateWeek(defaultProfile),logs:[],journals:[],insights:[]}}
const KEY="healthos-phase5";
export function load():State{if(typeof window==="undefined")return empty();try{const x=localStorage.getItem(KEY);return x?JSON.parse(x):empty()}catch{return empty()}}
export function save(s:State){if(typeof window!=="undefined")localStorage.setItem(KEY,JSON.stringify(s))}
export function journal(s:State,j:Journal):State{return{...s,journals:[...s.journals.filter(x=>x.date!==j.date),j]}}
export function mealLog(s:State,l:MealLog):State{return{...s,logs:[...s.logs.filter(x=>!(x.date===l.date&&x.slot===l.slot)),l]}}
