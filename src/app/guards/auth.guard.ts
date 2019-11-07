import { Injectable } from '@angular/core';
import { CanActivate,  ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate{
  constructor(public routes: Router){}

    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean {
        if(localStorage.getItem('role') == 'public'){
          this.routes.navigate(['login']);
          return false
        }else{
          return true
        }
      }
  
}
