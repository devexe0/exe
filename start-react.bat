@echo off
echo Starting .exe React Website Setup...

REM Create public/assets directory if it doesn't exist
if not exist "public\assets" (
    echo Creating public/assets directory...
    mkdir "public\assets"
)

REM Copy all assets
echo Copying assets from assets/ to public/assets/...
for %%f in (assets\*) do (
    echo Copying %%f...
    copy "%%f" "public\assets\"
)

REM Install dependencies if node_modules doesn't exist
if not exist "node_modules" (
    echo Installing React dependencies...
    npm install
)

echo.
echo Starting React development server...
echo The website will open in your browser at http://localhost:3000
echo.
echo Press Ctrl+C to stop the server when you're done.
echo.

REM Start the React development server
npm start
