import { injectGlobal } from "styled-components";

injectGlobal`

 @font-face {
  font-family: "Courier-family";
  src: local("Courier"); 
 }

 html, body {
 height: 100%;
 width: 100%;
 }
 body {
 font-family: "Courier-family";
  margin: 0;
  padding: 0;
 }

`;
