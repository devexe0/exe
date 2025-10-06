@echo off
echo Testing React server startup...
echo.

echo Checking if node_modules exists...
if exist "node_modules" (
    echo ✓ node_modules found
) else (
    echo ✗ node_modules not found - installing dependencies...
    npm install
)

echo.
echo Checking if public/assets exists...
if exist "public\assets" (
    echo ✓ public/assets found
) else (
    echo ✗ public/assets not found - creating and copying assets...
    mkdir public\assets
    copy assets\* public\assets\
)

echo.
echo Starting React development server...
echo This may take a moment...
echo.

REM Try to start the server and capture any errors
npm start 2>&1

echo.
echo If you see any errors above, please let me know what they are.
pause
