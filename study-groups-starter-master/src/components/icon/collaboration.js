import React from "react";

const CollaborationIcon = props => (
  <section>
    <img
      className="rules__icon"
      src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMi4wMDEgNTEyLjAwMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyLjAwMSA1MTIuMDAxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPHBhdGggc3R5bGU9ImZpbGw6I0MzREE0MDsiIGQ9Ik0xMTkuOTQ1LDE2OC4xMzZIMjEuMTAzYy00LjI5NSwwLTcuNzc3LTMuNDgyLTcuNzc3LTcuNzc3di0yMS44MTkgIGMwLTMxLjU5LDI1LjYwOS01Ny4xOTksNTcuMTk5LTU3LjE5OWwwLDBjMzEuNTksMCw1Ny4xOTksMjUuNjA5LDU3LjE5OSw1Ny4xOTl2MjEuODE5ICBDMTI3LjcyMiwxNjQuNjU1LDEyNC4yNDEsMTY4LjEzNiwxMTkuOTQ1LDE2OC4xMzZ6Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiNGRjYyQTc7IiBkPSJNMTc3Ljk1OCwzNjEuODA2Yy0xMS4wODEtNy4zMTYtMTguMTk5LTE1LjcwMi0yMS4xNTktMjQuOTI3ICBjLTE4LjY1LTcuOTE5LTMwLjY4OS0yNi40NTEtMzAuNjg5LTQ3LjI3N2MwLTI4LjE4NSwyMi4yMTEtNTEuMTE2LDQ5LjUxNC01MS4xMTZoNjMuMDE2YzI3LjMwMiwwLDQ5LjUxNCwyMi45MzEsNDkuNTE0LDUxLjExNiAgYzAsMjguMTg1LTIyLjIxMSw1MS4xMTUtNDkuNTE0LDUxLjExNWgtNDguODY2Yy0wLjQyLDQuMjE4LTAuMjUsOC42MDksMC41MDUsMTMuMDU5bDIuMjY1LDEzLjM1OCAgYzAuMzEyLDEuODQtMS43MjEsMy4xNjUtMy4yNzgsMi4xMzdMMTc3Ljk1OCwzNjEuODA2eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRkM1NDc5OyIgZD0iTTI4OC4xNTMsMjg5LjYwM2MwLTI4LjE4NS0yMi4yMTEtNTEuMTE2LTQ5LjUxNC01MS4xMTZoLTYzLjAxNmMtNy4xMDcsMC0xMy44NjIsMS41NjYtMTkuOTc3LDQuMzYyICBjMi42MzEsNDIuMzE2LDM4LjU3Nyw3NS4zNyw4MS40MjEsNzUuMzdoNDIuNTc5QzI4NS4wMTQsMzEwLjA0OCwyODguMTUzLDMwMC4xOTYsMjg4LjE1MywyODkuNjAzeiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojMzFEMkY3OyIgZD0iTTMwNy44NzUsMzI1LjM4NWMxLjU3Ny02Ljc4OSwyLjAzNy0xMy40NTMsMS4zNzEtMTkuODEzaC02MS4xODEgIGMtMzQuNDA1LDAtNjMuMTE2LTI3LjMyMS02My42NC02MS43MjNjLTAuNTM0LTM1LjAxNCwyNy43OTQtNjMuNjY5LDYyLjY4OC02My42NjloNzkuMDg4YzM0LjQ3OCwwLDYzLjE2NSwyNy40NjcsNjMuNTY5LDYxLjk0MyAgYzAuMzA0LDI1Ljg3NC0xNS4wMzEsNDguOTcyLTM4LjkxNiw1OC43NjhjLTUuMTQyLDE1LjU3LTE5Ljc2OSwyNi42Ny0zMS4xNjMsMzMuMjVsLTExLjczOCw2Ljc3OCAgYy0xLjYxNiwwLjkzNC0zLjU2Ny0wLjUxMi0zLjE0NS0yLjMzTDMwNy44NzUsMzI1LjM4NXoiLz4KPHBhdGggc3R5bGU9ImZpbGw6IzEzQUNFODsiIGQ9Ik0yMzUuNjY5LDI2MC44OGMtMC41MzQtMzUuMDE1LDI3Ljc5NC02My42NjksNjIuNjg4LTYzLjY2OWg3MS4zMTEgIGMtMTEuNDI4LTEwLjU3LTI2Ljc2Mi0xNy4wMzEtNDMuNDY4LTE3LjAzMWgtNzkuMDg4Yy0zNC44OTQsMC02My4yMjIsMjguNjU1LTYyLjY4OCw2My42NjkgIGMwLjUyNSwzNC40MDEsMjkuMjM1LDYxLjcyMyw2My42NCw2MS43MjNoNy43M0MyNDMuNjc2LDI5NC4zNzgsMjM1Ljk0LDI3OC41NzEsMjM1LjY2OSwyNjAuODh6Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiNGRkNGNTk7IiBkPSJNNDkwLjQyOCwxNjguMTM2aC05OC44NDJjLTQuMjk1LDAtNy43NzctMy40ODItNy43NzctNy43Nzd2LTIxLjgxOSAgYzAtMzEuNTksMjUuNjA5LTU3LjE5OSw1Ny4xOTktNTcuMTk5bDAsMGMzMS41OSwwLDU3LjE5OSwyNS42MDksNTcuMTk5LDU3LjE5OXYyMS44MTkgIEM0OTguMjA1LDE2NC42NTUsNDk0LjcyMywxNjguMTM2LDQ5MC40MjgsMTY4LjEzNnoiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0ZGNjJBNzsiIGQ9Ik0xMTkuOTQ1LDQ3My42NjVIMjEuMTAzYy00LjI5NSwwLTcuNzc3LTMuNDgyLTcuNzc3LTcuNzc4di0yMS44MTkgIGMwLTMxLjU5LDI1LjYwOS01Ny4xOTksNTcuMTk5LTU3LjE5OWwwLDBjMzEuNTksMCw1Ny4xOTksMjUuNjA5LDU3LjE5OSw1Ny4xOTl2MjEuODE5ICBDMTI3LjcyMiw0NzAuMTgyLDEyNC4yNDEsNDczLjY2NSwxMTkuOTQ1LDQ3My42NjV6Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiMzMUQyRjc7IiBkPSJNNDkwLjQyOCw0NzMuNjY1aC05OC44NDJjLTQuMjk1LDAtNy43NzctMy40ODItNy43NzctNy43Nzh2LTIxLjgxOSAgYzAtMzEuNTksMjUuNjA5LTU3LjE5OSw1Ny4xOTktNTcuMTk5bDAsMGMzMS41OSwwLDU3LjE5OSwyNS42MDksNTcuMTk5LDU3LjE5OXYyMS44MTkgIEM0OTguMjA1LDQ3MC4xODIsNDk0LjcyMyw0NzMuNjY1LDQ5MC40MjgsNDczLjY2NXoiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0FEQkMxNTsiIGQ9Ik01Ny4yNzksMTYwLjM1OXYtMjEuODE5YzAtMjMuODAxLDE0LjU0MS00NC4yMDEsMzUuMjIyLTUyLjgxNyAgYy02Ljc2Ny0yLjgxOS0xNC4xODktNC4zODItMjEuOTc3LTQuMzgybDAsMGMtMzEuNTksMC01Ny4xOTksMjUuNjA5LTU3LjE5OSw1Ny4xOTl2MjEuODE5YzAsNC4yOTUsMy40ODIsNy43NzcsNy43NzgsNy43NzdoNDMuOTUzICBDNjAuNzYxLDE2OC4xMzYsNTcuMjc5LDE2NC42NTUsNTcuMjc5LDE2MC4zNTl6Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiNGRkI1NUM7IiBkPSJNNDI3Ljc2MSwxNjAuMzU5di0yMS44MTljMC0yMy44MDEsMTQuNTQxLTQ0LjIwMSwzNS4yMjItNTIuODE3ICBjLTYuNzY3LTIuODE5LTE0LjE4OS00LjM4Mi0yMS45NzctNC4zODJsMCwwYy0zMS41OSwwLTU3LjE5OSwyNS42MDktNTcuMTk5LDU3LjE5OXYyMS44MTljMCw0LjI5NSwzLjQ4Miw3Ljc3Nyw3Ljc3OCw3Ljc3N2g0My45NTMgIEM0MzEuMjQzLDE2OC4xMzYsNDI3Ljc2MSwxNjQuNjU1LDQyNy43NjEsMTYwLjM1OXoiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0ZDNTQ3OTsiIGQ9Ik01Ny4yNzksNDY1Ljg4N3YtMjEuODE5YzAtMjMuODAxLDE0LjU0MS00NC4yMDIsMzUuMjIyLTUyLjgxNyAgYy02Ljc2Ny0yLjgxOC0xNC4xODktNC4zODItMjEuOTc3LTQuMzgybDAsMGMtMzEuNTksMC01Ny4xOTksMjUuNjA5LTU3LjE5OSw1Ny4xOTl2MjEuODE5YzAsNC4yOTUsMy40ODIsNy43NzgsNy43NzgsNy43NzhoNDMuOTUzICBDNjAuNzYxLDQ3My42NjUsNTcuMjc5LDQ3MC4xODIsNTcuMjc5LDQ2NS44ODd6Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiMxM0FDRTg7IiBkPSJNNDI3Ljc2MSw0NjUuODg3di0yMS44MTljMC0yMy44MDEsMTQuNTQxLTQ0LjIwMiwzNS4yMjItNTIuODE3ICBjLTYuNzY3LTIuODE4LTE0LjE4OS00LjM4Mi0yMS45NzctNC4zODJsMCwwYy0zMS41OSwwLTU3LjE5OSwyNS42MDktNTcuMTk5LDU3LjE5OXYyMS44MTljMCw0LjI5NSwzLjQ4Miw3Ljc3OCw3Ljc3OCw3Ljc3OGg0My45NTMgIEM0MzEuMjQzLDQ3My42NjUsNDI3Ljc2MSw0NzAuMTgyLDQyNy43NjEsNDY1Ljg4N3oiLz4KPGc+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRkFEMzkzOyIgZD0iTTcwLjAzLDExMy45MDVjLTIwLjQzOCwwLTM3LjA2Ni0xNi42MjgtMzcuMDY2LTM3LjA2N1M0OS41OTIsMzkuNzcxLDcwLjAzLDM5Ljc3MSAgIGMyMC40MzksMCwzNy4wNjcsMTYuNjI4LDM3LjA2NywzNy4wNjdTOTAuNDY5LDExMy45MDUsNzAuMDMsMTEzLjkwNXoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNGQUQzOTM7IiBkPSJNNDQwLjUxMiwxMTMuOTA1Yy0yMC40MzgsMC0zNy4wNjYtMTYuNjI4LTM3LjA2Ni0zNy4wNjdzMTYuNjI4LTM3LjA2NywzNy4wNjYtMzcuMDY3ICAgYzIwLjQzOSwwLDM3LjA2NywxNi42MjgsMzcuMDY3LDM3LjA2N1M0NjAuOTUxLDExMy45MDUsNDQwLjUxMiwxMTMuOTA1eiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6I0ZBRDM5MzsiIGQ9Ik03MC4wMyw0MTkuNDM0Yy0yMC40MzgsMC0zNy4wNjYtMTYuNjI5LTM3LjA2Ni0zNy4wNjdzMTYuNjI4LTM3LjA2NywzNy4wNjYtMzcuMDY3ICAgYzIwLjQzOSwwLDM3LjA2NywxNi42MjgsMzcuMDY3LDM3LjA2N1M5MC40NjksNDE5LjQzNCw3MC4wMyw0MTkuNDM0eiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6I0ZBRDM5MzsiIGQ9Ik00NDAuNTEyLDQxOS40MzRjLTIwLjQzOCwwLTM3LjA2Ni0xNi42MjktMzcuMDY2LTM3LjA2N3MxNi42MjgtMzcuMDY3LDM3LjA2Ni0zNy4wNjcgICBjMjAuNDM5LDAsMzcuMDY3LDE2LjYyOCwzNy4wNjcsMzcuMDY3UzQ2MC45NTEsNDE5LjQzNCw0NDAuNTEyLDQxOS40MzR6Ii8+CjwvZz4KPGc+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRURCNzY5OyIgZD0iTTY3Ljk3LDc2LjgzOWMwLTE0LjExMiw3LjkyOC0yNi40MDQsMTkuNTYzLTMyLjY2NGMtNS4yMTYtMi44MDYtMTEuMTc3LTQuNDA0LTE3LjUwNC00LjQwNCAgIGMtMjAuNDM4LDAtMzcuMDY2LDE2LjYyOC0zNy4wNjYsMzcuMDY3czE2LjYyOCwzNy4wNjcsMzcuMDY2LDM3LjA2N2M2LjMyNywwLDEyLjI4Ny0xLjU5NywxNy41MDQtNC40MDQgICBDNzUuODk4LDEwMy4yNDMsNjcuOTcsOTAuOTUxLDY3Ljk3LDc2LjgzOXoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNFREI3Njk7IiBkPSJNNDM4LjQ1Myw3Ni44MzljMC0xNC4xMTIsNy45MjgtMjYuNDA0LDE5LjU2My0zMi42NjRjLTUuMjE3LTIuODA2LTExLjE3Ny00LjQwNC0xNy41MDQtNC40MDQgICBjLTIwLjQzOCwwLTM3LjA2NiwxNi42MjgtMzcuMDY2LDM3LjA2N3MxNi42MjgsMzcuMDY3LDM3LjA2NiwzNy4wNjdjNi4zMjcsMCwxMi4yODctMS41OTcsMTcuNTA0LTQuNDA0ICAgQzQ0Ni4zODIsMTAzLjI0Myw0MzguNDUzLDkwLjk1MSw0MzguNDUzLDc2LjgzOXoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNFREI3Njk7IiBkPSJNNjcuOTcsMzgyLjM2OGMwLTE0LjExMiw3LjkyOC0yNi40MDQsMTkuNTYzLTMyLjY2NGMtNS4yMTYtMi44MDYtMTEuMTc3LTQuNDA0LTE3LjUwNC00LjQwNCAgIGMtMjAuNDM4LDAtMzcuMDY2LDE2LjYyOC0zNy4wNjYsMzcuMDY3YzAsMjAuNDM5LDE2LjYyOCwzNy4wNjcsMzcuMDY2LDM3LjA2N2M2LjMyNywwLDEyLjI4Ny0xLjU5NywxNy41MDQtNC40MDQgICBDNzUuODk4LDQwOC43NzEsNjcuOTcsMzk2LjQ3OSw2Ny45NywzODIuMzY4eiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6I0VEQjc2OTsiIGQ9Ik00MzguNDUzLDM4Mi4zNjhjMC0xNC4xMTIsNy45MjgtMjYuNDA0LDE5LjU2My0zMi42NjRjLTUuMjE3LTIuODA2LTExLjE3Ny00LjQwNC0xNy41MDQtNC40MDQgICBjLTIwLjQzOCwwLTM3LjA2NiwxNi42MjgtMzcuMDY2LDM3LjA2N2MwLDIwLjQzOSwxNi42MjgsMzcuMDY3LDM3LjA2NiwzNy4wNjdjNi4zMjcsMCwxMi4yODctMS41OTcsMTcuNTA0LTQuNDA0ICAgQzQ0Ni4zODIsNDA4Ljc3MSw0MzguNDUzLDM5Ni40NzksNDM4LjQ1MywzODIuMzY4eiIvPgo8L2c+CjxwYXRoIGQ9Ik0xMzEuODcsNTAuMTcyYzEuNDIsMCwyLjg1OC0wLjM2NCw0LjE3NC0xLjEyN2M3Ljk5OS00LjY0MywxNi4zNTEtOC44NTksMjQuODIzLTEyLjUzMyAgYzQuMjIxLTEuODMxLDYuMTU5LTYuNzM1LDQuMzI4LTEwLjk1NmMtMS44My00LjIyLTYuNzM1LTYuMTU4LTEwLjk1NS00LjMyOGMtOS4wNjUsMy45MzEtMTguMDAxLDguNDQyLTI2LjU1OSwxMy40MDkgIGMtMy45OCwyLjMxLTUuMzMyLDcuNDA2LTMuMDIzLDExLjM4NUMxMjYuMjA0LDQ4LjY4NSwxMjguOTk4LDUwLjE3MiwxMzEuODcsNTAuMTcyeiIvPgo8cGF0aCBkPSJNMjk3LjE4NiwyMC4zOTFjOS4xMTQsMS41OCwxOC4yMjYsMy43MTUsMjcuMDg1LDYuMzQ2YzAuNzkyLDAuMjM1LDEuNTksMC4zNDcsMi4zNzYsMC4zNDdjMy41OTIsMCw2LjkwNi0yLjM0Miw3Ljk4Mi01Ljk2MSAgYzEuMzExLTQuNDEtMS4yMDMtOS4wNDctNS42MTMtMTAuMzU2Yy05LjQ4MS0yLjgxNS0xOS4yMzEtNS4xMDEtMjguOTgzLTYuNzkxYy00LjUyOS0wLjc4NS04Ljg0NSwyLjI1MS05LjYzLDYuNzg0ICBDMjg5LjYxNywxNS4yOTQsMjkyLjY1NCwxOS42MDUsMjk3LjE4NiwyMC4zOTF6Ii8+CjxwYXRoIGQ9Ik0yNDEuMjAxLDE3LjI5N2MwLjE2NSwwLDAuMzMxLTAuMDA0LDAuNDk4LTAuMDE1YzQuNzI4LTAuMjc5LDkuNTMxLTAuNDIsMTQuMjc2LTAuNDJjMC4wMDksMCwwLjAxNywwLDAuMDI1LDAgIGM0LjUwOSwwLDkuMDY0LDAuMTI3LDEzLjUzOSwwLjM3N2M0LjYxNywwLjI2Myw4LjUyNS0zLjI1OSw4Ljc4MS03Ljg1MmMwLjI1NS00LjU5My0zLjI1OS04LjUyNS03Ljg1Mi04Ljc4MSAgYy00Ljc4My0wLjI2Ny05LjY1MS0wLjQwMy0xNC40NjYtMC40MDNjLTAuMDEsMC0wLjAxOCwwLTAuMDI4LDBjLTUuMDY5LDAtMTAuMjAyLDAuMTUtMTUuMjU0LDAuNDQ5ICBjLTQuNTkyLDAuMjcxLTguMDk2LDQuMjEzLTcuODI1LDguODA1QzIzMy4xNTQsMTMuODgzLDIzNi44MjUsMTcuMjk3LDI0MS4yMDEsMTcuMjk3eiIvPgo8cGF0aCBkPSJNNDk1LjAwMiwxOTAuNDgyYy00LjQ3NSwxLjA2Ni03LjIzOCw1LjU1OS02LjE3MiwxMC4wMzRjMi4xNDEsOC45ODUsMy43NzQsMTguMjAyLDQuODU3LDI3LjM5NSAgYzAuNDk5LDQuMjM4LDQuMDk3LDcuMzU3LDguMjYxLDcuMzU3YzAuMzI2LDAsMC42NTQtMC4wMTksMC45ODUtMC4wNThjNC41NjgtMC41MzgsNy44MzYtNC42NzcsNy4yOTgtOS4yNDYgIGMtMS4xNTctOS44MzQtMi45MDUtMTkuNjk1LTUuMTk1LTI5LjMwOEM1MDMuOTY4LDE5Mi4xNzksNDk5LjQ3OCwxODkuNDEzLDQ5NS4wMDIsMTkwLjQ4MnoiLz4KPHBhdGggZD0iTTQ4MC45NzYsMzM4LjA2NWMtMS41NzMsNC4zMjMsMC42NTYsOS4xMDMsNC45OCwxMC42NzZjMC45NCwwLjM0MywxLjkwMSwwLjUwNCwyLjg0OCwwLjUwNCAgYzMuNDAzLDAsNi41OTctMi4xMDEsNy44MjgtNS40ODRjMy4zODctOS4zMDQsNi4yNTUtMTguOTA2LDguNTMtMjguNTRjMS4wNTYtNC40NzctMS43MTctOC45NjQtNi4xOTQtMTAuMDIgIGMtNC40NzEtMS4wNTUtOC45NjQsMS43MTQtMTAuMDIxLDYuMTk0QzQ4Ni44MjEsMzIwLjM5OCw0ODQuMTQsMzI5LjM3MSw0ODAuOTc2LDMzOC4wNjV6Ii8+CjxwYXRoIGQ9Ik0zNTAuNDQxLDM2LjIxNWM4LjQ5MSwzLjY1LDE2Ljg2Miw3Ljg0NSwyNC44ODQsMTIuNDY3YzEuMzEyLDAuNzU1LDIuNzQsMS4xMTQsNC4xNTIsMS4xMTQgIGMyLjg4MSwwLDUuNjgzLTEuNDk3LDcuMjI0LTQuMTcyYzIuMjk3LTMuOTg2LDAuOTI5LTkuMDc5LTMuMDU4LTExLjM3NmMtOC41ODItNC45NDYtMTcuNTM5LTkuNDMzLTI2LjYyNC0xMy4zMzggIGMtNC4yMjktMS44MjItOS4xMjYsMC4xMzYtMTAuOTQyLDQuMzYzQzM0NC4yNjEsMjkuNDk5LDM0Ni4yMTUsMzQuMzk3LDM1MC40NDEsMzYuMjE1eiIvPgo8cGF0aCBkPSJNMTMuMDg0LDMwNS40NjFjLTQuNDc2LDEuMDYyLTcuMjQ0LDUuNTUxLTYuMTgzLDEwLjAyN2MyLjI4NCw5LjYzLDUuMTYxLDE5LjIyNCw4LjU1NCwyOC41MTYgIGMxLjIzMywzLjM3OSw0LjQyNiw1LjQ3NSw3LjgyNSw1LjQ3NWMwLjk0OCwwLDEuOTE0LTAuMTYzLDIuODU2LTAuNTA4YzQuMzIxLTEuNTc3LDYuNTQ2LTYuMzU5LDQuOTY4LTEwLjY4MSAgYy0zLjE2OS04LjY4Mi01Ljg1OS0xNy42NDYtNy45OTMtMjYuNjQ1QzIyLjA0OSwzMDcuMTY4LDE3LjU2OSwzMDQuNCwxMy4wODQsMzA1LjQ2MXoiLz4KPHBhdGggZD0iTTE4NC41OTUsMjcuMzEyYzAuNzk0LDAsMS42MDItMC4xMTQsMi40MDItMC4zNTVjOC44NDctMi42NTksMTcuOTUzLTQuODI0LDI3LjA2NC02LjQzNCAgYzQuNTMxLTAuODAxLDcuNTU1LTUuMTIyLDYuNzU0LTkuNjUyYy0wLjgwMS00LjUzMS01LjExOC03LjU1My05LjY1Mi02Ljc1NGMtOS43NDksMS43MjItMTkuNDkzLDQuMDM5LTI4Ljk2Myw2Ljg4NSAgYy00LjQwNiwxLjMyNS02LjkwMyw1Ljk3LTUuNTc5LDEwLjM3NUMxNzcuNzA1LDI0Ljk4NSwxODEuMDE0LDI3LjMxMiwxODQuNTk1LDI3LjMxMnoiLz4KPHBhdGggZD0iTTUwMy42NywyNDcuMzQ3Yy00LjYwMSwwLTguMzI5LDMuNzI5LTguMzI5LDguMzI5djAuNTI3YzAsOS4yNzgtMC41MzcsMTguNjI3LTEuNTk1LDI3Ljc4OCAgYy0wLjUyOCw0LjU3LDIuNzQ4LDguNzAzLDcuMzE3LDkuMjMxYzAuMzI2LDAuMDM4LDAuNjQ3LDAuMDU2LDAuOTY4LDAuMDU2YzQuMTcyLDAsNy43NzMtMy4xMjksOC4yNjQtNy4zNzMgIGMxLjEzMi05Ljc5MywxLjcwNi0xOS43ODcsMS43MDYtMjkuNzAxdi0wLjUyN0M1MTEuOTk5LDI1MS4wNzYsNTA4LjI3LDI0Ny4zNDcsNTAzLjY3LDI0Ny4zNDd6Ii8+CjxwYXRoIGQ9Ik0yOTcuNjg3LDQ5MS45MjdjLTkuMDg3LDEuNTk1LTE4LjM4NywyLjY3Ni0yNy42NDIsMy4yMTFjLTQuNTkyLDAuMjY2LTguMSw0LjIwNC03LjgzNCw4Ljc5NiAgYzAuMjU1LDQuNDI5LDMuOTI4LDcuODQ4LDguMzA4LDcuODQ4YzAuMTYxLDAsMC4zMjYtMC4wMDQsMC40ODktMC4wMTRjOS44OTQtMC41NzIsMTkuODQxLTEuNzI3LDI5LjU2LTMuNDM1ICBjNC41MzEtMC43OTYsNy41Ni01LjExMyw2Ljc2My05LjY0NUMzMDYuNTM3LDQ5NC4xNTksMzAyLjIxNiw0OTEuMTMsMjk3LjY4Nyw0OTEuOTI3eiIvPgo8cGF0aCBkPSJNMjQyLjIwNSw0OTUuMTUzYy05LjI1Ni0wLjUyNi0xOC41NTYtMS41OTctMjcuNjQyLTMuMTgyYy00LjU0LTAuNzkzLTguODQ3LDIuMjQyLTkuNjM5LDYuNzczICBjLTAuNzkxLDQuNTMyLDIuMjQyLDguODQ3LDYuNzczLDkuNjM4YzkuNzIsMS42OTYsMTkuNjY2LDIuODQyLDI5LjU2NCwzLjQwNGMwLjE2LDAuMDA5LDAuMzIsMC4wMTMsMC40OCwwLjAxMyAgYzQuMzg0LDAsOC4wNTgtMy40MjYsOC4zMDktNy44NTdDMjUwLjMxLDQ5OS4zNDgsMjQ2Ljc5OCw0OTUuNDE0LDI0Mi4yMDUsNDk1LjE1M3oiLz4KPHBhdGggZD0iTTE4Ny40ODQsNDg1LjU5NWMtOC44Ni0yLjY0Mi0xNy42NjEtNS44NC0yNi4xNTktOS41MDVjLTQuMjIzLTEuODItOS4xMjYsMC4xMjYtMTAuOTQ2LDQuMzUxICBjLTEuODIzLDQuMjI0LDAuMTI2LDkuMTI1LDQuMzUsMTAuOTQ2YzkuMDk1LDMuOTIxLDE4LjUxMyw3LjM0MiwyNy45OTUsMTAuMTdjMC43OTQsMC4yMzcsMS41OTUsMC4zNSwyLjM4NCwwLjM1ICBjMy41ODgsMCw2LjkwMS0yLjMzOCw3Ljk4LTUuOTUxQzE5NC40MDEsNDkxLjU0OSwxOTEuODkzLDQ4Ni45MSwxODcuNDg0LDQ4NS41OTV6Ii8+CjxwYXRoIGQ9Ik05LjAwMiwyMzUuOTk2YzAuMzIzLDAuMDM3LDAuNjQyLDAuMDU1LDAuOTU5LDAuMDU1YzQuMTc2LDAsNy43NzktMy4xMzQsOC4yNjQtNy4zODJjMS4wNTMtOS4xOTcsMi42NTctMTguNDE5LDQuNzY5LTI3LjQxICBjMS4wNTEtNC40NzktMS43MjYtOC45NjItNi4yMDUtMTAuMDE0Yy00LjQ3OC0xLjA1NS04Ljk2MywxLjcyNS0xMC4wMTUsNi4yMDVjLTIuMjU4LDkuNjE5LTMuOTc1LDE5LjQ4NS01LjEwMSwyOS4zMjMgIEMxLjE0OSwyMzEuMzQ0LDQuNDMxLDIzNS40NzMsOS4wMDIsMjM1Ljk5NnoiLz4KPHBhdGggZD0iTTM1MC44OTgsNDc1Ljk5NmMtOC40OTIsMy42NzEtMTcuMjg2LDYuODc2LTI2LjEzOCw5LjUyN2MtNC40MDcsMS4zMi02LjkwOSw1Ljk2Mi01LjU5LDEwLjM2OSAgYzEuMDgsMy42MTEsNC4zOTIsNS45NDMsNy45NzcsNS45NDNjMC43OTEsMCwxLjU5NS0wLjExNCwyLjM5My0wLjM1MmM5LjQ3NC0yLjgzNywxOC44ODQtNi4yNjcsMjcuOTcxLTEwLjE5NiAgYzQuMjIyLTEuODI2LDYuMTY2LTYuNzI5LDQuMzM5LTEwLjk1MUMzNjAuMDI0LDQ3Ni4xMTMsMzU1LjEyMyw0NzQuMTcsMzUwLjg5OCw0NzUuOTk2eiIvPgo8cGF0aCBkPSJNMTAuOTc0LDI5My40ODNjNC41Ny0wLjUzMyw3Ljg0MS00LjY2OSw3LjMwOC05LjIzOWMtMS4wNjgtOS4xNTktMS42MTQtMTguNTA4LTEuNjIzLTI3Ljc4NyAgYy0wLjAwNC00LjU5OC0zLjczMy04LjMyMS04LjMyOS04LjMyMWMtMC4wMDIsMC0wLjAwNSwwLTAuMDA5LDBjLTQuNiwwLjAwNS04LjMyNSwzLjczNy04LjMyMSw4LjMzOCAgYzAuMDEsOS45MTUsMC41OTQsMTkuOTA4LDEuNzM2LDI5LjdjMC40OTUsNC4yNDIsNC4wOTQsNy4zNjUsOC4yNjIsNy4zNjVDMTAuMzIsMjkzLjUzOSwxMC42NDcsMjkzLjUyMSwxMC45NzQsMjkzLjQ4M3oiLz4KPHBhdGggZD0iTTIyLjQwNSwxNzQuNzhoOTYuMjM4YzkuNzYyLDAsMTcuNzA0LTcuOTQyLDE3LjcwNC0xNy43MDR2LTIwLjA3MWMwLTYuNjY1LTEuMDgyLTEzLjIxNy0zLjIxOC0xOS40NzQgIGMtMS4zNDEtMy45MjgtNS42MTgtNi4wMjUtOS41MzktNC42ODVjLTMuOTI5LDEuMzQxLTYuMDI2LDUuNjExLTQuNjg1LDkuNTRjMS42MDEsNC42OSwyLjQxMiw5LjYxLDIuNDEyLDE0LjYydjIwLjA3MSAgYzAsMS40NzUtMS4xOTksMi42NzQtMi42NzQsMi42NzRIMjIuNDA0Yy0xLjQ3NSwwLTIuNjc0LTEuMTk5LTIuNjc0LTIuNjc0di0yMC4wNzFjMC0xMi45MjYsNS41NTEtMjUuMTcyLDE1LjA2Ny0zMy43MDYgIGM4LjA1MSwxMC42OTIsMjAuODQ2LDE3LjYyLDM1LjIzMSwxNy42MmMyNC4zMDYsMCw0NC4wODEtMTkuNzc1LDQ0LjA4MS00NC4wODFTOTQuMzM1LDMyLjc1OCw3MC4wMywzMi43NTggIFMyNS45NDksNTIuNTMzLDI1Ljk0OSw3Ni44MzljMCw0LjQyMSwwLjY2MSw4LjY4OCwxLjg3OCwxMi43MTdjLTE0LjUzMiwxMS4zOTItMjMuMTI1LDI4Ljg5MS0yMy4xMjUsNDcuNDUxdjIwLjA3MSAgQzQuNzAxLDE2Ni44MzgsMTIuNjQzLDE3NC43OCwyMi40MDUsMTc0Ljc4eiBNNzAuMDMsNDcuNzg3YzE2LjAxOSwwLDI5LjA1MiwxMy4wMzIsMjkuMDUyLDI5LjA1MnMtMTMuMDMyLDI5LjA1Mi0yOS4wNTIsMjkuMDUyICBjLTE2LjAxOCwwLTI5LjA1MS0xMy4wMzItMjkuMDUxLTI5LjA1MlM1NC4wMSw0Ny43ODcsNzAuMDMsNDcuNzg3eiIvPgo8cGF0aCBkPSJNMzc1LjY1MiwxMzcuMDA2djIwLjA3MWMwLDkuNzYyLDcuOTQxLDE3LjcwNCwxNy43MDQsMTcuNzA0aDk2LjIzOGM5Ljc2MiwwLDE3LjcwNC03Ljk0MiwxNy43MDQtMTcuNzA0di0yMC4wNzEgIGMwLTYuNjY1LTEuMDgyLTEzLjIxNy0zLjIxOC0xOS40NzRjLTEuMzQxLTMuOTI4LTUuNjE2LTYuMDI1LTkuNTM5LTQuNjg1Yy0zLjkyOSwxLjM0MS02LjAyNiw1LjYxMS00LjY4NSw5LjU0ICBjMS42LDQuNjksMi40MTIsOS42MSwyLjQxMiwxNC42MnYyMC4wNzFjMCwxLjQ3NS0xLjE5OSwyLjY3NC0yLjY3NCwyLjY3NGgtOTYuMjM4Yy0xLjQ3NSwwLTIuNjc0LTEuMTk5LTIuNjc0LTIuNjc0di0yMC4wNzEgIGMwLTEyLjkyNiw1LjU1MS0yNS4xNzIsMTUuMDY3LTMzLjcwNmM4LjA1MSwxMC42OTIsMjAuODQ2LDE3LjYyLDM1LjIzMSwxNy42MmMyNC4zMDYsMCw0NC4wODEtMTkuNzc1LDQ0LjA4MS00NC4wODEgIHMtMTkuNzc1LTQ0LjA4MS00NC4wODEtNDQuMDgxYy0yNC4zMDYsMC00NC4wOCwxOS43NzUtNDQuMDgsNDQuMDgxYzAsNC40MjEsMC42NjEsOC42ODgsMS44NzgsMTIuNzE3ICBDMzg0LjI0NCwxMDAuOTQ4LDM3NS42NTIsMTE4LjQ0NiwzNzUuNjUyLDEzNy4wMDZ6IE00NDAuOTc5LDQ3Ljc4N2MxNi4wMTksMCwyOS4wNTIsMTMuMDMyLDI5LjA1MiwyOS4wNTIgIHMtMTMuMDMyLDI5LjA1Mi0yOS4wNTIsMjkuMDUyYy0xNi4wMTgsMC0yOS4wNTEtMTMuMDMyLTI5LjA1MS0yOS4wNTJTNDI0Ljk2MSw0Ny43ODcsNDQwLjk3OSw0Ny43ODd6Ii8+CjxwYXRoIGQ9Ik00OTQuNTQsNDE3LjcxNWMtMy45MjksMS4zNDEtNi4wMjYsNS42MTEtNC42ODUsOS41NGMxLjYsNC42OSwyLjQxMiw5LjYwOSwyLjQxMiwxNC42MnYyMC4wNzEgIGMwLDEuNDc1LTEuMTk5LDIuNjc0LTIuNjc0LDIuNjc0aC05Ni4yMzhjLTEuNDc1LDAtMi42NzQtMS4xOTktMi42NzQtMi42NzR2LTIwLjA3MWMwLTEyLjkyNiw1LjU1MS0yNS4xNzIsMTUuMDY3LTMzLjcwNiAgYzguMDUxLDEwLjY5MiwyMC44NDYsMTcuNjIsMzUuMjMxLDE3LjYyYzI0LjMwNiwwLDQ0LjA4MS0xOS43NzUsNDQuMDgxLTQ0LjA4MWMwLTI0LjMwNi0xOS43NzUtNDQuMDgxLTQ0LjA4MS00NC4wODEgIGMtMjQuMzA2LDAtNDQuMDgsMTkuNzc1LTQ0LjA4LDQ0LjA4MWMwLDQuNDIxLDAuNjYxLDguNjg4LDEuODc4LDEyLjcxN2MtMTQuNTMyLDExLjM5Mi0yMy4xMjUsMjguODkxLTIzLjEyNSw0Ny40NTF2MjAuMDcxICBjMCw5Ljc2Miw3Ljk0MSwxNy43MDQsMTcuNzA0LDE3LjcwNGg5Ni4yMzhjOS43NjIsMCwxNy43MDQtNy45NDEsMTcuNzA0LTE3LjcwNHYtMjAuMDcxYzAtNi42NjUtMS4wODItMTMuMjE3LTMuMjE4LTE5LjQ3NCAgQzUwMi43MzgsNDE4LjQ3MSw0OTguNDYyLDQxNi4zNzMsNDk0LjU0LDQxNy43MTV6IE00NDAuOTc5LDM1Mi42NTVjMTYuMDE5LDAsMjkuMDUyLDEzLjAzMiwyOS4wNTIsMjkuMDUyICBzLTEzLjAzMiwyOS4wNTItMjkuMDUyLDI5LjA1MmMtMTYuMDE4LDAtMjkuMDUxLTEzLjAzMi0yOS4wNTEtMjkuMDUyUzQyNC45NjEsMzUyLjY1NSw0NDAuOTc5LDM1Mi42NTV6Ii8+CjxwYXRoIGQ9Ik0xMjMuNTksNDE3LjcxNWMtMy45MjksMS4zNDEtNi4wMjYsNS42MTEtNC42ODUsOS41NGMxLjYwMSw0LjY5LDIuNDEyLDkuNjA5LDIuNDEyLDE0LjYydjIwLjA3MSAgYzAsMS40NzUtMS4xOTksMi42NzQtMi42NzQsMi42NzRIMjIuNDA1Yy0xLjQ3NSwwLTIuNjc0LTEuMTk5LTIuNjc0LTIuNjc0di0yMC4wNzFjMC0xMi45MjYsNS41NTEtMjUuMTcyLDE1LjA2Ny0zMy43MDYgIGM4LjA1MSwxMC42OTIsMjAuODQ2LDE3LjYyLDM1LjIzMSwxNy42MmMyNC4zMDYsMCw0NC4wODEtMTkuNzc1LDQ0LjA4MS00NC4wODFjMC0yNC4zMDYtMTkuNzc1LTQ0LjA4MS00NC4wODEtNDQuMDgxICBzLTQ0LjA4LDE5Ljc3NS00NC4wOCw0NC4wODFjMCw0LjQyMSwwLjY2MSw4LjY4OCwxLjg3OCwxMi43MTdjLTE0LjUzMiwxMS4zOTItMjMuMTI1LDI4Ljg5MS0yMy4xMjUsNDcuNDUxdjIwLjA3MSAgYzAsOS43NjIsNy45NDIsMTcuNzA0LDE3LjcwNCwxNy43MDRoOTYuMjM4YzkuNzYyLDAsMTcuNzA0LTcuOTQxLDE3LjcwNC0xNy43MDR2LTIwLjA3MWMwLTYuNjY1LTEuMDgyLTEzLjIxNy0zLjIxOC0xOS40NzQgIEMxMzEuNzg3LDQxOC40NzEsMTI3LjUxLDQxNi4zNzMsMTIzLjU5LDQxNy43MTV6IE03MC4wMywzNTIuNjU1YzE2LjAxOSwwLDI5LjA1MiwxMy4wMzIsMjkuMDUyLDI5LjA1MiAgcy0xMy4wMzIsMjkuMDUyLTI5LjA1MiwyOS4wNTJjLTE2LjAxOCwwLTI5LjA1MS0xMy4wMzItMjkuMDUxLTI5LjA1MlM1NC4wMSwzNTIuNjU1LDcwLjAzLDM1Mi42NTV6Ii8+CjxwYXRoIGQ9Ik0zMjcuMDc5LDE3My4xNjVoLTc5Ljk2NmMtMzQuNTU0LDAtNjMuMzAyLDI1LjI3Ni02OC43NjEsNTguMzA4aC0yLjcyOGMtMzEuMTY5LDAtNTYuNTI3LDI2LjA3Ny01Ni41MjcsNTguMTMgIGMwLDIyLjU4MSwxMi41MDMsNDIuODA0LDMyLjEzLDUyLjQzOGM5LjY0NywyMy4zNjgsMzkuNzQ2LDM0LjU3Niw0MS4wNzksMzUuMDYxYzAuODQsMC4zMDcsMS43MSwwLjQ1NSwyLjU3MiwwLjQ1NSAgYzIuMDU1LDAsNC4wNjYtMC44NDUsNS41MTUtMi40MDljMi4wNTYtMi4yMiwyLjU4LTUuNDU3LDEuMzI5LTguMjEyYy0zLjAyNS02LjY2Mi00LjcyNi0xMy4wOTYtNS4wODYtMTkuMjA0aDQyLjAwNCAgYzIzLjIzMywwLDQzLjIyOS0xNC40OTMsNTEuOTA5LTM1LjE0NmgxMS45NjVjLTAuMjExLDguMjI5LTIuNDQ0LDE2LjkyNy02LjY3MiwyNS45NDdjLTEuMjg1LDIuNzQyLTAuNzk5LDUuOTg5LDEuMjMzLDguMjMzICBjMS40NTEsMS42MDIsMy40ODcsMi40NzEsNS41NzIsMi40NzFjMC44MzgsMCwxLjY4Mi0wLjE0LDIuNS0wLjQyOWMxLjY2OS0wLjU4OSwzOS42MDQtMTQuMjY5LDUxLjI0Ni00Mi42ODMgIGMyNC42NTItMTEuNDAzLDQwLjM5Ny0zNS44NzEsNDAuMzk3LTYzLjI0OUMzOTYuNzksMjA0LjQzNywzNjUuNTE4LDE3My4xNjUsMzI3LjA3OSwxNzMuMTY1eiBNMzQ3LjYyNiwyOTMuNTUgIGMtMi4wMzUsMC44MjctMy42MjcsMi40NzMtNC4yOTcsNC41NjVjLTQuMjE3LDEzLjE2Ni0xNy4wNTQsMjIuOTY3LTI3LjY0NSwyOS4wODNjMS44Mi03LjgzNCwyLjMyLTE1LjQ5NywxLjQ4NS0yMi45MTggIGMtMC40My0zLjgxOS0zLjYzLTYuNzI0LTcuNDczLTYuNzI0aC02Mi41ODJjLTcuMTk2LDAtMTQuMDY2LTEuNDA2LTIwLjM2My0zLjk0N2MtMi43ODgtMS4xMjUtNS45NzMtMC41MTItOC4wOTksMS42MTQgIGwtMC4xMDcsMC4xMDdjLTMuNzc5LDMuNzc5LTIuNDU4LDEwLjE3NiwyLjQ5NiwxMi4xODVjOC4wNTcsMy4yNjYsMTYuODU3LDUuMDcsMjYuMDcyLDUuMDdoMjYuNjA0ICBjLTcuMzU5LDEyLjA3Ny0yMC4zMjksMjAuMTE2LTM1LjA3OSwyMC4xMTZoLTQ5LjMxN2MtMy44MSwwLTcuMDQ0LDIuODUzLTcuNDY0LDYuNjRjLTAuNTY5LDUuMTM0LTAuMzk1LDEwLjQwMiwwLjUxNiwxNS43NzUgIGMtNy4yOTUtNC44MTYtMTUuMDgyLTExLjc3NS0xNy45NDQtMjAuNjg2Yy0wLjY5NC0yLjE2Mi0yLjIyNi0zLjk3Ni00LjMyLTQuODUzYy0xNS43ODYtNi42MTctMjUuOTg1LTIyLjMwOS0yNS45ODUtMzkuOTc0ICBjMC0yMy43NjUsMTguNjE1LTQzLjEsNDEuNDk4LTQzLjFoMS44NzZjMC40MDUsNy44NTUsMi4xMiwxNS4zNjgsNC45MjcsMjIuMzI5YzIuMDA0LDQuOTcxLDguNDA2LDYuMzE2LDEyLjE5NiwyLjUyNiAgYzAuMDM3LTAuMDM3LDAuMDc0LTAuMDc0LDAuMTEtMC4xMWMyLjExNy0yLjExNywyLjc0Mi01LjI4OSwxLjYyNS04LjA2N2MtMi42NjgtNi42MzUtNC4wNzgtMTMuOTA2LTMuOTExLTIxLjUyMyAgYzAuNjU3LTI5Ljg0NywyNS41ODctNTMuNDYyLDU1LjQ0MS01My40NjJoNzguMjczYzMwLjE3NSwwLDU1LjY5NSwyNC42ODQsNTUuNiw1NC44NTggIEMzODEuNjg5LDI2NS4zNDcsMzY4LjMwNiwyODUuMTU1LDM0Ny42MjYsMjkzLjU1eiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"
    />
    {/* <div>Icons made by <a href="https://www.flaticon.com/authors/srip" title="srip">srip</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */}
  </section>
);

export default CollaborationIcon;
