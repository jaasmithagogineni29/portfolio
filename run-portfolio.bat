@echo off
title Peach Portfolio Runner
cls

echo ===================================================
echo             Starting Peach Portfolio
echo ===================================================
echo.

:: Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed!
    echo Please install Node.js from https://nodejs.org/ to run this project.
    echo.
    pause
    exit /b 1
)

:: Navigate to the directory where the batch file is located
cd /d "%~dp0"

:: Check if requirements need to be installed or updated
set INSTALL_NEEDED=0
if not exist "node_modules\" (
    set INSTALL_NEEDED=1
) else if not exist "node_modules\.package.json.cache" (
    set INSTALL_NEEDED=1
) else (
    :: Check if package.json has changed since last install
    fc "package.json" "node_modules\.package.json.cache" >nul 2>&1
    if errorlevel 1 set INSTALL_NEEDED=1
)

if %INSTALL_NEEDED% equ 1 (
    echo [INFO] Installing/updating project requirements...
    echo This might take a few moments. Please wait...
    call npm install
    if %errorlevel% neq 0 (
        echo.
        echo [ERROR] Failed to install dependencies.
        pause
        exit /b 1
    )
    :: Save a copy of package.json to know when it has changed next time
    copy /y "package.json" "node_modules\.package.json.cache" >nul
    echo [SUCCESS] Requirements installed successfully.
    echo.
) else (
    echo [INFO] Requirements are already met. Skipping installation.
    echo.
)

echo [INFO] Launching development server and opening Chrome...
echo.

:: Set environment variable to force Chrome to open
set BROWSER=chrome

:: Start Vite dev server and open in Chrome browser
call npm run dev -- --open

pause
