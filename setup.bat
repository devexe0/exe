@echo off
echo Setting up .exe React Website...

REM Create public/assets directory
if not exist "public\assets" mkdir "public\assets"

REM Copy assets
echo Copying assets...
copy "assets\*" "public\assets\"

REM Install dependencies
echo Installing dependencies...
npm install

echo.
echo Setup complete! 
echo.
echo To start the development server, run:
echo npm start
echo.
echo To build for production, run:
echo npm run build
echo.
pause
