import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { exhaustMap, map } from "rxjs";
import { AuthServiceService } from "src/app/service/auth-service.service";
import { loginStart, loginSuccess } from "./aut.action";

@Injectable()
export class AuthEffects{

    constructor(private actions$:Actions, private authService:AuthServiceService){}

    login$= createEffect(()=>{
        return this.actions$.pipe(
            ofType(loginStart),
            exhaustMap((action)=>{
                return this.authService.login(action.email,action.password)
                .pipe( map(data=>{
                    const user=this.authService.formatUser(data)
                    return loginSuccess({user})
                }))
            })
        )
    })


}