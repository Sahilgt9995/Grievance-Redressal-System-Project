import './polyfills.server.mjs';
import{U as n}from"./chunk-2CCXKE3L.mjs";var t="token",o="user",s=class r{constructor(){}static saveToken(e){window.localStorage.removeItem(t),window.localStorage.setItem(t,e)}static saveUser(e){window.localStorage.removeItem(o),window.localStorage.setItem(o,JSON.stringify(e))}static getToken(){return localStorage.getItem(t)}static getUser(){let e=localStorage.getItem(o);return e?JSON.parse(e):null}static getUserRole(){let e=this.getUser();return e?e.role:null}static isAdminLoggedIn(){return this.getToken()===null?!1:this.getUserRole()==="ADMIN"}static isEmployeeLoggedIn(){return this.getToken()===null?!1:this.getUserRole()==="EMPLOYEE"}static isUserLoggedIn(){return this.getToken()===null?!1:this.getUserRole()==="CUSTOMER"}static getUserId(){let e=this.getUser();return e?e.id:null}static hasToken(){return this.getToken()!==null}static signout(){window.localStorage.removeItem(t),window.localStorage.removeItem(o)}static \u0275fac=function(a){return new(a||r)};static \u0275prov=n({token:r,factory:r.\u0275fac,providedIn:"root"})};export{s as a};
