{\rtf1\ansi\ansicpg1252\cocoartf2865
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fmodern\fcharset0 CourierNewPSMT;\f1\fswiss\fcharset0 Helvetica;\f2\fswiss\fcharset0 ArialMT;
}
{\colortbl;\red255\green255\blue255;\red10\green10\blue11;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c3529\c3529\c4314;\cssrgb\c0\c0\c0;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs20 \cf2 \expnd0\expndtw0\kerning0
import React from "react";
\f1\fs32 \cf3 \

\f0\fs20 \cf2 import \{ Link, useLocation \} from "react-router-dom";
\f1\fs32 \cf3 \

\f0\fs20 \cf2 import \{ createPageUrl \} from "@/utils";
\f1\fs32 \cf3 \

\f0\fs20 \cf2 import \{ Clock, Calculator, BarChart3, Download, Upload, Settings \} from "lucide-react";
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 // Block 1: Hauptfunktionen
\f1\fs32 \cf3 \

\f0\fs20 \cf2 const block1Items = [
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 \{ title: "Zeiterfassung", url: createPageUrl("Arbeit2"), icon: Clock \},
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 \{ title: "Lohnberechnung", url: createPageUrl("Lohn"), icon: Calculator \},
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 \{ title: "Jahresbilanz", url: createPageUrl("Jahresbilanz"), icon: BarChart3 \},
\f1\fs32 \cf3 \

\f0\fs20 \cf2 ];
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 // Block 2: Datenverwaltung
\f1\fs32 \cf3 \

\f0\fs20 \cf2 const block2Items = [
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 \{ title: "Wiederherstellen", url: createPageUrl("Wiederherstellen"), icon: Upload \},
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 \{ title: "Backup", url: createPageUrl("Backup"), icon: Download \},
\f1\fs32 \cf3 \

\f0\fs20 \cf2 ];
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 export default function Layout(\{ children \}) \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 const location = useLocation();
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 return (
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 <div style=\{\{ minHeight: '100vh', background: 'linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)', fontFamily: 'Inter, sans-serif' \}\}>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 <style>\{`
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 * \{ 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 margin: 0; 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 padding: 0; 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 box-sizing: border-box; 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 body \{ 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 background: linear-gradient(135deg, #1a1a2e, #16213e, #0f3460) !important; 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 color: #e2e8f0 !important; 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 font-family: 'Inter', sans-serif !important;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .main-container \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 position: relative;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 background: 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3), transparent 50%),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3), transparent 50%),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 radial-gradient(circle at 40% 40%, rgba(120, 198, 255, 0.3), transparent 50%),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 linear-gradient(135deg, #1a1a2e, #16213e, #0f3460);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 animation: backgroundShift 20s ease-in-out infinite;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 @keyframes backgroundShift \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0%, 100% \{ filter: hue-rotate(0deg) saturate(1); \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 50% \{ filter: hue-rotate(30deg) saturate(1.2); \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .glassmorphism \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 background: 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 linear-gradient(135deg, 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(255, 255, 255, 0.1) 0%,
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(255, 255, 255, 0.05) 25%,
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(255, 255, 255, 0.02) 50%,
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(255, 255, 255, 0.08) 100%
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 );
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 backdrop-filter: blur(20px) saturate(180%);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border: 1px solid rgba(255, 255, 255, 0.15);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border-radius: 16px;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 box-shadow: 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0 20px 60px rgba(0, 0, 0, 0.3),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0 10px 30px rgba(0, 0, 0, 0.2),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 inset 0 1px 0 rgba(255, 255, 255, 0.25),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 inset 0 -1px 0 rgba(0, 0, 0, 0.15);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 position: relative;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 overflow: hidden;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .glassmorphism::before \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 content: '';
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 position: absolute;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 top: 0;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 left: -100%;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 width: 100%;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 height: 100%;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 transition: left 0.8s;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .glassmorphism:hover::before \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 left: 100%;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .glassmorphism:hover \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 transform: translateY(-8px);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 box-shadow: 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0 35px 120px rgba(0, 0, 0, 0.5),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0 25px 60px rgba(0, 0, 0, 0.4),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0 15px 30px rgba(0, 0, 0, 0.3),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 inset 0 1px 0 rgba(255, 255, 255, 0.35),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 inset 0 -1px 0 rgba(0, 0, 0, 0.1);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border-color: rgba(255, 255, 255, 0.25);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .sidebar-3d \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 background: 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 linear-gradient(180deg, 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(30, 30, 70, 0.95) 0%,
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(20, 25, 50, 0.98) 50%,
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(15, 20, 40, 0.99) 100%
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 );
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 backdrop-filter: blur(25px) saturate(200%);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border-right: 2px solid rgba(255, 255, 255, 0.1);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 box-shadow: 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 15px 0 50px rgba(0, 0, 0, 0.5),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 8px 0 25px rgba(0, 0, 0, 0.3),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 inset -2px 0 0 rgba(255, 255, 255, 0.08);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 position: relative;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 overflow: hidden;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .sidebar-3d::before \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 content: '';
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 position: absolute;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 top: 0;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 right: -3px;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 width: 3px;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 height: 100%;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 background: linear-gradient(180deg, 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(120, 119, 198, 0.8), 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(255, 119, 198, 0.6), 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(120, 198, 255, 0.8)
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 );
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 animation: sidebarGlow 3s ease-in-out infinite alternate;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 @keyframes sidebarGlow \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0% \{ opacity: 0.3; transform: scaleY(0.8); \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 100% \{ opacity: 1; transform: scaleY(1.2); \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .sidebar-title \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 background-clip: text;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 -webkit-background-clip: text;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 -webkit-text-fill-color: transparent;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 text-shadow: 0 0 30px rgba(102, 126, 234, 0.5);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 animation: titleGlow 2s ease-in-out infinite alternate;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 @keyframes titleGlow \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0% \{ filter: brightness(1); \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 100% \{ filter: brightness(1.3); \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .nav-item-3d \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 transition: all 0.35s cubic-bezier(0.23, 1, 0.32, 1);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 position: relative;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 overflow: hidden;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border-radius: 15px;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 background: rgba(255, 255, 255, 0.03);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border: 1px solid rgba(255, 255, 255, 0.05);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .nav-item-3d::before \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 content: '';
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 position: absolute;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 top: 0;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 left: -100%;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 width: 100%;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 height: 100%;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 background: linear-gradient(90deg, 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 transparent, 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(255, 255, 255, 0.1), 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(120, 119, 198, 0.2),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(255, 255, 255, 0.1), 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 transparent
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 );
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 transition: left 0.6s ease;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .nav-item-3d:hover::before \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 left: 100%;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .nav-item-3d::after \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 content: '';
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 position: absolute;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 top: 50%;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 left: 50%;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 width: 0;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 height: 0;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 background: radial-gradient(circle, rgba(255, 255, 255, 0.1), transparent);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border-radius: 50%;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 transform: translate(-50%, -50%);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 transition: all 0.4s ease;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .nav-item-3d:hover::after \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 width: 200px;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 height: 200px;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .nav-item-3d:hover \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 transform: translateY(-5px);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 box-shadow: 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0 15px 40px rgba(0, 0, 0, 0.4),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0 8px 20px rgba(120, 119, 198, 0.3),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 inset 0 1px 0 rgba(255, 255, 255, 0.2);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 background: rgba(255, 255, 255, 0.08);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border-color: rgba(255, 255, 255, 0.15);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .nav-item-active \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 background: linear-gradient(135deg, 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(102, 126, 234, 0.8) 0%,
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(118, 75, 162, 0.8) 50%,
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(120, 119, 198, 0.8) 100%
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 );
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 box-shadow: 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0 10px 30px rgba(102, 126, 234, 0.5),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0 5px 15px rgba(118, 75, 162, 0.3),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 inset 0 1px 0 rgba(255, 255, 255, 0.3),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 inset 0 -1px 0 rgba(0, 0, 0, 0.1);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border-color: rgba(255, 255, 255, 0.2);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 animation: activeGlow 2s ease-in-out infinite alternate;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 @keyframes activeGlow \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0% \{ box-shadow: 0 10px 30px rgba(102, 126, 234, 0.5), 0 5px 15px rgba(118, 75, 162, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3); \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 100% \{ box-shadow: 0 15px 45px rgba(102, 126, 234, 0.7), 0 8px 25px rgba(118, 75, 162, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.4); \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .button-3d \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 background: linear-gradient(145deg, 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(71, 85, 105, 0.8) 0%,
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(51, 65, 85, 0.9) 50%,
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(30, 41, 59, 0.95) 100%
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 );
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border: 1px solid rgba(148, 163, 184, 0.4);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border-radius: 12px;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 box-shadow: 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0 8px 20px rgba(0, 0, 0, 0.2),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0 4px 10px rgba(0, 0, 0, 0.15),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 inset 0 1px 0 rgba(255, 255, 255, 0.2),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 inset 0 -1px 0 rgba(0, 0, 0, 0.3);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 position: relative;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 overflow: hidden;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 cursor: pointer;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .button-3d::before \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 content: '';
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 position: absolute;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 top: -50%;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 left: -50%;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 width: 200%;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 height: 200%;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 transform: rotate(45deg);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 transition: all 0.6s;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 opacity: 0;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .button-3d:hover::before \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 animation: buttonShine 0.6s ease-out;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 @keyframes buttonShine \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0% \{ opacity: 0; transform: translateX(-100%) translateY(-100%) rotate(45deg); \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 50% \{ opacity: 1; \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 100% \{ opacity: 0; transform: translateX(100%) translateY(100%) rotate(45deg); \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .button-3d:hover \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 transform: translateY(-5px);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 box-shadow: 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0 20px 50px rgba(0, 0, 0, 0.4),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0 10px 25px rgba(0, 0, 0, 0.3),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 inset 0 1px 0 rgba(255, 255, 255, 0.3),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 inset 0 -1px 0 rgba(0, 0, 0, 0.2);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border-color: rgba(148, 163, 184, 0.6);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .button-3d:active \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 transform: translateY(-2px);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 box-shadow: 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0 8px 20px rgba(0, 0, 0, 0.5),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 inset 0 3px 8px rgba(0, 0, 0, 0.4);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .button-active \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 background: linear-gradient(145deg, 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(102, 126, 234, 0.9) 0%,
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(118, 75, 162, 0.9) 50%,
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(59, 130, 246, 0.9) 100%
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 );
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 box-shadow: 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0 12px 35px rgba(102, 126, 234, 0.5),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0 6px 18px rgba(118, 75, 162, 0.3),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 inset 0 1px 0 rgba(255, 255, 255, 0.3);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 animation: buttonActiveGlow 2s ease-in-out infinite alternate;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 @keyframes buttonActiveGlow \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0% \{ box-shadow: 0 12px 35px rgba(102, 126, 234, 0.5), 0 6px 18px rgba(118, 75, 162, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3); \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 100% \{ box-shadow: 0 18px 50px rgba(102, 126, 234, 0.7), 0 10px 30px rgba(118, 75, 162, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.4); \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .table-3d \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 background: 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 linear-gradient(135deg, 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(51, 65, 85, 0.6) 0%,
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(30, 41, 59, 0.7) 50%,
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(15, 23, 42, 0.8) 100%
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 );
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 backdrop-filter: blur(15px) saturate(180%);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border: 1px solid rgba(148, 163, 184, 0.25);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border-radius: 16px;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 box-shadow: 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0 20px 60px rgba(0, 0, 0, 0.3),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0 10px 30px rgba(0, 0, 0, 0.2),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 inset 0 1px 0 rgba(255, 255, 255, 0.15),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 inset 0 -1px 0 rgba(0, 0, 0, 0.2);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 overflow: hidden;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 position: relative;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .table-3d::before \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 content: '';
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 position: absolute;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 top: 0;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 left: 0;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 right: 0;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 height: 2px;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 background: linear-gradient(90deg, 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 transparent,
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(102, 126, 234, 0.8),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(118, 75, 162, 0.8),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(120, 119, 198, 0.8),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 transparent
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 );
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 animation: tableHeaderGlow 3s ease-in-out infinite;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 @keyframes tableHeaderGlow \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0%, 100% \{ opacity: 0.5; transform: scaleX(0.8); \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 50% \{ opacity: 1; transform: scaleX(1.2); \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .table-row-3d \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 background: rgba(71, 85, 105, 0.2);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border-bottom: 1px solid rgba(148, 163, 184, 0.15);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 position: relative;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .table-row-3d:hover \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 background: rgba(100, 116, 139, 0.4);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 transform: translateX(5px);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 box-shadow: 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 -5px 0 20px rgba(102, 126, 234, 0.2),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0 5px 15px rgba(0, 0, 0, 0.3);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border-left: 2px solid rgba(102, 126, 234, 0.6);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .input-3d \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 background: 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 linear-gradient(135deg, 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(30, 41, 59, 0.9) 0%,
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(15, 23, 42, 0.95) 100%
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 );
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border: 1px solid rgba(148, 163, 184, 0.4);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border-radius: 10px;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 color: #e2e8f0;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 box-shadow: 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 inset 0 2px 5px rgba(0, 0, 0, 0.3),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 inset 0 1px 0 rgba(255, 255, 255, 0.1),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0 1px 2px rgba(0, 0, 0, 0.1);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 position: relative;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 cursor: text;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 font-size: 14px;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 font-weight: 400;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 min-height: 38px;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 padding: 6px 10px;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .input-3d::before \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 content: '';
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 position: absolute;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 top: 0;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 left: 0;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 right: 0;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 bottom: 0;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 background: linear-gradient(135deg, 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(102, 126, 234, 0.1), 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 transparent 50%, 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(118, 75, 162, 0.1)
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 );
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border-radius: inherit;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 opacity: 0;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 transition: opacity 0.3s;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .input-3d:focus \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 box-shadow: 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 inset 0 3px 8px rgba(0, 0, 0, 0.3),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0 0 0 2px rgba(102, 126, 234, 0.6),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0 8px 25px rgba(102, 126, 234, 0.3),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0 4px 15px rgba(0, 0, 0, 0.2);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 outline: none;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border-color: rgba(102, 126, 234, 0.8);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .input-3d:focus::before \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 opacity: 1;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .input-3d:read-only \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 background: rgba(45, 55, 72, 0.7);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 color: #94a3b8;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 cursor: default;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .loader \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 width: 50px;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 height: 50px;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border: 4px solid rgba(74, 85, 104, 0.2);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border-top: 4px solid transparent;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border-radius: 50%;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 animation: spin 1s linear infinite;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 position: relative;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .loader::before \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 content: '';
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 position: absolute;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 top: -4px;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 left: -4px;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 right: -4px;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 bottom: -4px;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border: 4px solid transparent;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border-top: 4px solid rgba(102, 126, 234, 0.8);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border-radius: 50%;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 animation: spin 1.5s linear infinite reverse;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .loader::after \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 content: '';
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 position: absolute;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 top: 2px;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 left: 2px;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 right: 2px;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 bottom: 2px;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border: 2px solid transparent;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border-top: 2px solid rgba(118, 75, 162, 0.8);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border-radius: 50%;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 animation: spin 0.8s linear infinite;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 @keyframes spin \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0% \{ transform: rotate(0deg); \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 100% \{ transform: rotate(360deg); \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .toast-container \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 position: fixed;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 bottom: 2rem;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 right: 2rem;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 z-index: 1000;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 animation: toastSlideIn 0.5s ease-out;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 @keyframes toastSlideIn \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0% \{ transform: translateY(100%); opacity: 0; \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 100% \{ transform: translateY(0); opacity: 1; \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .version-tag \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 font-size: 0.7rem;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 color: rgba(160, 174, 192, 0.8);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 margin-left: 0.5rem;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 background: linear-gradient(45deg, rgba(102, 126, 234, 0.3), rgba(118, 75, 162, 0.3));
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 padding: 2px 8px;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border-radius: 10px;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border: 1px solid rgba(255, 255, 255, 0.1);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 animation: versionPulse 3s ease-in-out infinite;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 @keyframes versionPulse \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0%, 100% \{ opacity: 0.6; transform: scale(1); \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 50% \{ opacity: 1; transform: scale(1.05); \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .floating-particles \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 position: fixed;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 top: 0;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 left: 0;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 width: 100%;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 height: 100%;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 pointer-events: none;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 z-index: 1;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .particle \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 position: absolute;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 width: 2px;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 height: 2px;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 background: rgba(255, 255, 255, 0.1);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border-radius: 50%;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 animation: float 20s infinite linear;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 @keyframes float \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0% \{ transform: translateY(100vh) rotate(0deg); opacity: 0; \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 10% \{ opacity: 1; \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 90% \{ opacity: 1; \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 100% \{ transform: translateY(-100px) rotate(360deg); opacity: 0; \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 @media (max-width: 768px) \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 .sidebar-3d \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 position: relative;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 backdrop-filter: blur(20px);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 ::-webkit-scrollbar \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 width: 8px;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 ::-webkit-scrollbar-track \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 background: rgba(30, 41, 59, 0.3);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border-radius: 10px;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 ::-webkit-scrollbar-thumb \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 background: linear-gradient(135deg, rgba(102, 126, 234, 0.8), rgba(118, 75, 162, 0.8));
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border-radius: 10px;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 ::-webkit-scrollbar-thumb:hover \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 background: linear-gradient(135deg, rgba(102, 126, 234, 1), rgba(118, 75, 162, 1));
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 `\}</style>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 <div className="floating-particles">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \{[...Array(20)].map((_, i) => (
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <div
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 key=\{i\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 className="particle"
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 style=\{\{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 left: `$\{Math.random() * 100\}%`,
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 animationDelay: `$\{Math.random() * 20\}s`,
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 animationDuration: `$\{15 + Math.random() * 10\}s`
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 />
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 ))\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 </div>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 <div className="flex w-full main-container">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 <aside className="w-64 flex-shrink-0 sidebar-3d p-4 flex flex-col relative self-start sticky top-0 h-screen">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <div className="mb-6">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <div className="flex items-center gap-3">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <div className="relative">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <Settings className="w-10 h-10 text-blue-400" />
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <Clock className="w-6 h-6 text-white absolute -bottom-1 -right-1" />
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </div>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <h1 className="text-2xl font-bold sidebar-title">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 WorkClock
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <span className="version-tag">V.3.5</span>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </h1>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </div>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </div>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <nav className="flex-grow">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <ul className="space-y-2">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 \{block1Items.map((item) => \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 const isActive = location.pathname === item.url || 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 (item.url.includes('/Arbeit2') && location.pathname === '/');
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 return (
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <li key=\{item.title\}>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <Link
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 to=\{item.url\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 className=\{`flex items-center gap-3 px-3 py-2 text-sm font-medium nav-item-3d $\{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 isActive 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 ? 'nav-item-active text-white' 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 : 'text-gray-300 hover:text-white'
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}`\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 >
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <item.icon className="w-5 h-5 relative z-10" />
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <span className="relative z-10">\{item.title\}</span>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </Link>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </li>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 );
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 \})\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </ul>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <div className="my-6 px-3">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Verwaltung</p>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </div>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <ul className="space-y-2">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 \{block2Items.map((item) => \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 const isActive = location.pathname === item.url;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 return (
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <li key=\{item.title\}>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <Link
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 to=\{item.url\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 className=\{`flex items-center gap-3 px-3 py-2 text-sm font-medium nav-item-3d $\{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 isActive 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 ? 'nav-item-active text-white' 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 : 'text-gray-300 hover:text-white'
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}`\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 >
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <item.icon className="w-5 h-5 relative z-10" />
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <span className="relative z-10">\{item.title\}</span>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </Link>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </li>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 );
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 \})\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </ul>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </nav>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 </aside>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 <main className="flex-1 relative">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <div className="p-4">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 \{children\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </div>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 </main>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 </div>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 </div>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 );
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \}
\f1\fs32 \cf3 \
\pard\pardeftab720\partightenfactor0

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \
\pard\pardeftab720\partightenfactor0

\f0\fs20 \cf2 import React from "react";
\f1\fs32 \cf3 \

\f0\fs20 \cf2 import \{ Link, useLocation \} from "react-router-dom";
\f1\fs32 \cf3 \

\f0\fs20 \cf2 import \{ createPageUrl \} from "@/utils";
\f1\fs32 \cf3 \

\f0\fs20 \cf2 import \{ Clock, Calculator, BarChart3, Download, Upload, Settings \} from "lucide-react";
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 // Block 1: Hauptfunktionen
\f1\fs32 \cf3 \

\f0\fs20 \cf2 const block1Items = [
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 \{ title: "Zeiterfassung", url: createPageUrl("Arbeit2"), icon: Clock \},
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 \{ title: "Lohnberechnung", url: createPageUrl("Lohn"), icon: Calculator \},
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 \{ title: "Jahresbilanz", url: createPageUrl("Jahresbilanz"), icon: BarChart3 \},
\f1\fs32 \cf3 \

\f0\fs20 \cf2 ];
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 // Block 2: Datenverwaltung
\f1\fs32 \cf3 \

\f0\fs20 \cf2 const block2Items = [
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 \{ title: "Wiederherstellen", url: createPageUrl("Wiederherstellen"), icon: Upload \},
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 \{ title: "Backup", url: createPageUrl("Backup"), icon: Download \},
\f1\fs32 \cf3 \

\f0\fs20 \cf2 ];
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 export default function Layout(\{ children \}) \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 const location = useLocation();
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 return (
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 <div style=\{\{ minHeight: '100vh', background: 'linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)', fontFamily: 'Inter, sans-serif' \}\}>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 <style>\{`
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 * \{ 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 margin: 0; 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 padding: 0; 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 box-sizing: border-box; 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 body \{ 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 background: linear-gradient(135deg, #1a1a2e, #16213e, #0f3460) !important; 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 color: #e2e8f0 !important; 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 font-family: 'Inter', sans-serif !important;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .main-container \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 position: relative;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 background: 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3), transparent 50%),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3), transparent 50%),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 radial-gradient(circle at 40% 40%, rgba(120, 198, 255, 0.3), transparent 50%),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 linear-gradient(135deg, #1a1a2e, #16213e, #0f3460);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 animation: backgroundShift 20s ease-in-out infinite;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 @keyframes backgroundShift \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0%, 100% \{ filter: hue-rotate(0deg) saturate(1); \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 50% \{ filter: hue-rotate(30deg) saturate(1.2); \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .glassmorphism \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 background: 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 linear-gradient(135deg, 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(255, 255, 255, 0.1) 0%,
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(255, 255, 255, 0.05) 25%,
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(255, 255, 255, 0.02) 50%,
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(255, 255, 255, 0.08) 100%
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 );
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 backdrop-filter: blur(20px) saturate(180%);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border: 1px solid rgba(255, 255, 255, 0.15);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border-radius: 16px;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 box-shadow: 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0 20px 60px rgba(0, 0, 0, 0.3),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0 10px 30px rgba(0, 0, 0, 0.2),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 inset 0 1px 0 rgba(255, 255, 255, 0.25),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 inset 0 -1px 0 rgba(0, 0, 0, 0.15);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 position: relative;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 overflow: hidden;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .glassmorphism::before \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 content: '';
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 position: absolute;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 top: 0;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 left: -100%;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 width: 100%;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 height: 100%;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 transition: left 0.8s;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .glassmorphism:hover::before \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 left: 100%;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .glassmorphism:hover \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 transform: translateY(-8px);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 box-shadow: 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0 35px 120px rgba(0, 0, 0, 0.5),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0 25px 60px rgba(0, 0, 0, 0.4),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0 15px 30px rgba(0, 0, 0, 0.3),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 inset 0 1px 0 rgba(255, 255, 255, 0.35),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 inset 0 -1px 0 rgba(0, 0, 0, 0.1);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border-color: rgba(255, 255, 255, 0.25);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .sidebar-3d \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 background: 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 linear-gradient(180deg, 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(30, 30, 70, 0.95) 0%,
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(20, 25, 50, 0.98) 50%,
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(15, 20, 40, 0.99) 100%
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 );
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 backdrop-filter: blur(25px) saturate(200%);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border-right: 2px solid rgba(255, 255, 255, 0.1);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 box-shadow: 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 15px 0 50px rgba(0, 0, 0, 0.5),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 8px 0 25px rgba(0, 0, 0, 0.3),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 inset -2px 0 0 rgba(255, 255, 255, 0.08);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 position: relative;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 overflow: hidden;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .sidebar-3d::before \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 content: '';
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 position: absolute;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 top: 0;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 right: -3px;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 width: 3px;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 height: 100%;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 background: linear-gradient(180deg, 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(120, 119, 198, 0.8), 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(255, 119, 198, 0.6), 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(120, 198, 255, 0.8)
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 );
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 animation: sidebarGlow 3s ease-in-out infinite alternate;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 @keyframes sidebarGlow \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0% \{ opacity: 0.3; transform: scaleY(0.8); \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 100% \{ opacity: 1; transform: scaleY(1.2); \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .sidebar-title \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 background-clip: text;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 -webkit-background-clip: text;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 -webkit-text-fill-color: transparent;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 text-shadow: 0 0 30px rgba(102, 126, 234, 0.5);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 animation: titleGlow 2s ease-in-out infinite alternate;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 @keyframes titleGlow \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0% \{ filter: brightness(1); \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 100% \{ filter: brightness(1.3); \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .nav-item-3d \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 transition: all 0.35s cubic-bezier(0.23, 1, 0.32, 1);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 position: relative;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 overflow: hidden;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border-radius: 15px;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 background: rgba(255, 255, 255, 0.03);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border: 1px solid rgba(255, 255, 255, 0.05);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .nav-item-3d::before \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 content: '';
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 position: absolute;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 top: 0;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 left: -100%;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 width: 100%;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 height: 100%;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 background: linear-gradient(90deg, 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 transparent, 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(255, 255, 255, 0.1), 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(120, 119, 198, 0.2),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(255, 255, 255, 0.1), 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 transparent
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 );
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 transition: left 0.6s ease;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .nav-item-3d:hover::before \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 left: 100%;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .nav-item-3d::after \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 content: '';
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 position: absolute;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 top: 50%;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 left: 50%;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 width: 0;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 height: 0;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 background: radial-gradient(circle, rgba(255, 255, 255, 0.1), transparent);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border-radius: 50%;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 transform: translate(-50%, -50%);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 transition: all 0.4s ease;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .nav-item-3d:hover::after \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 width: 200px;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 height: 200px;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .nav-item-3d:hover \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 transform: translateY(-5px);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 box-shadow: 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0 15px 40px rgba(0, 0, 0, 0.4),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0 8px 20px rgba(120, 119, 198, 0.3),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 inset 0 1px 0 rgba(255, 255, 255, 0.2);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 background: rgba(255, 255, 255, 0.08);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border-color: rgba(255, 255, 255, 0.15);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .nav-item-active \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 background: linear-gradient(135deg, 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(102, 126, 234, 0.8) 0%,
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(118, 75, 162, 0.8) 50%,
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(120, 119, 198, 0.8) 100%
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 );
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 box-shadow: 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0 10px 30px rgba(102, 126, 234, 0.5),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0 5px 15px rgba(118, 75, 162, 0.3),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 inset 0 1px 0 rgba(255, 255, 255, 0.3),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 inset 0 -1px 0 rgba(0, 0, 0, 0.1);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border-color: rgba(255, 255, 255, 0.2);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 animation: activeGlow 2s ease-in-out infinite alternate;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 @keyframes activeGlow \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0% \{ box-shadow: 0 10px 30px rgba(102, 126, 234, 0.5), 0 5px 15px rgba(118, 75, 162, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3); \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 100% \{ box-shadow: 0 15px 45px rgba(102, 126, 234, 0.7), 0 8px 25px rgba(118, 75, 162, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.4); \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .button-3d \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 background: linear-gradient(145deg, 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(71, 85, 105, 0.8) 0%,
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(51, 65, 85, 0.9) 50%,
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(30, 41, 59, 0.95) 100%
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 );
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border: 1px solid rgba(148, 163, 184, 0.4);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border-radius: 12px;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 box-shadow: 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0 8px 20px rgba(0, 0, 0, 0.2),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0 4px 10px rgba(0, 0, 0, 0.15),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 inset 0 1px 0 rgba(255, 255, 255, 0.2),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 inset 0 -1px 0 rgba(0, 0, 0, 0.3);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 position: relative;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 overflow: hidden;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 cursor: pointer;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .button-3d::before \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 content: '';
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 position: absolute;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 top: -50%;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 left: -50%;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 width: 200%;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 height: 200%;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 transform: rotate(45deg);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 transition: all 0.6s;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 opacity: 0;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .button-3d:hover::before \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 animation: buttonShine 0.6s ease-out;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 @keyframes buttonShine \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0% \{ opacity: 0; transform: translateX(-100%) translateY(-100%) rotate(45deg); \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 50% \{ opacity: 1; \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 100% \{ opacity: 0; transform: translateX(100%) translateY(100%) rotate(45deg); \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .button-3d:hover \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 transform: translateY(-5px);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 box-shadow: 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0 20px 50px rgba(0, 0, 0, 0.4),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0 10px 25px rgba(0, 0, 0, 0.3),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 inset 0 1px 0 rgba(255, 255, 255, 0.3),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 inset 0 -1px 0 rgba(0, 0, 0, 0.2);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border-color: rgba(148, 163, 184, 0.6);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .button-3d:active \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 transform: translateY(-2px);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 box-shadow: 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0 8px 20px rgba(0, 0, 0, 0.5),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 inset 0 3px 8px rgba(0, 0, 0, 0.4);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .button-active \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 background: linear-gradient(145deg, 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(102, 126, 234, 0.9) 0%,
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(118, 75, 162, 0.9) 50%,
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(59, 130, 246, 0.9) 100%
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 );
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 box-shadow: 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0 12px 35px rgba(102, 126, 234, 0.5),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0 6px 18px rgba(118, 75, 162, 0.3),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 inset 0 1px 0 rgba(255, 255, 255, 0.3);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 animation: buttonActiveGlow 2s ease-in-out infinite alternate;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 @keyframes buttonActiveGlow \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0% \{ box-shadow: 0 12px 35px rgba(102, 126, 234, 0.5), 0 6px 18px rgba(118, 75, 162, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3); \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 100% \{ box-shadow: 0 18px 50px rgba(102, 126, 234, 0.7), 0 10px 30px rgba(118, 75, 162, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.4); \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .table-3d \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 background: 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 linear-gradient(135deg, 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(51, 65, 85, 0.6) 0%,
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(30, 41, 59, 0.7) 50%,
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(15, 23, 42, 0.8) 100%
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 );
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 backdrop-filter: blur(15px) saturate(180%);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border: 1px solid rgba(148, 163, 184, 0.25);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border-radius: 16px;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 box-shadow: 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0 20px 60px rgba(0, 0, 0, 0.3),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0 10px 30px rgba(0, 0, 0, 0.2),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 inset 0 1px 0 rgba(255, 255, 255, 0.15),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 inset 0 -1px 0 rgba(0, 0, 0, 0.2);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 overflow: hidden;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 position: relative;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .table-3d::before \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 content: '';
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 position: absolute;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 top: 0;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 left: 0;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 right: 0;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 height: 2px;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 background: linear-gradient(90deg, 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 transparent,
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(102, 126, 234, 0.8),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(118, 75, 162, 0.8),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(120, 119, 198, 0.8),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 transparent
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 );
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 animation: tableHeaderGlow 3s ease-in-out infinite;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 @keyframes tableHeaderGlow \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0%, 100% \{ opacity: 0.5; transform: scaleX(0.8); \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 50% \{ opacity: 1; transform: scaleX(1.2); \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .table-row-3d \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 background: rgba(71, 85, 105, 0.2);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border-bottom: 1px solid rgba(148, 163, 184, 0.15);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 position: relative;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .table-row-3d:hover \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 background: rgba(100, 116, 139, 0.4);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 transform: translateX(5px);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 box-shadow: 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 -5px 0 20px rgba(102, 126, 234, 0.2),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0 5px 15px rgba(0, 0, 0, 0.3);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border-left: 2px solid rgba(102, 126, 234, 0.6);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .input-3d \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 background: 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 linear-gradient(135deg, 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(30, 41, 59, 0.9) 0%,
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(15, 23, 42, 0.95) 100%
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 );
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border: 1px solid rgba(148, 163, 184, 0.4);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border-radius: 10px;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 color: #e2e8f0;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 box-shadow: 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 inset 0 2px 5px rgba(0, 0, 0, 0.3),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 inset 0 1px 0 rgba(255, 255, 255, 0.1),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0 1px 2px rgba(0, 0, 0, 0.1);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 position: relative;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 cursor: text;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 font-size: 14px;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 font-weight: 400;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 min-height: 38px;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 padding: 6px 10px;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .input-3d::before \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 content: '';
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 position: absolute;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 top: 0;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 left: 0;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 right: 0;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 bottom: 0;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 background: linear-gradient(135deg, 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(102, 126, 234, 0.1), 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 transparent 50%, 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 rgba(118, 75, 162, 0.1)
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 );
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border-radius: inherit;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 opacity: 0;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 transition: opacity 0.3s;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .input-3d:focus \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 box-shadow: 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 inset 0 3px 8px rgba(0, 0, 0, 0.3),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0 0 0 2px rgba(102, 126, 234, 0.6),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0 8px 25px rgba(102, 126, 234, 0.3),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0 4px 15px rgba(0, 0, 0, 0.2);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 outline: none;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border-color: rgba(102, 126, 234, 0.8);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .input-3d:focus::before \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 opacity: 1;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .input-3d:read-only \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 background: rgba(45, 55, 72, 0.7);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 color: #94a3b8;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 cursor: default;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .loader \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 width: 50px;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 height: 50px;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border: 4px solid rgba(74, 85, 104, 0.2);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border-top: 4px solid transparent;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border-radius: 50%;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 animation: spin 1s linear infinite;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 position: relative;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .loader::before \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 content: '';
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 position: absolute;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 top: -4px;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 left: -4px;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 right: -4px;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 bottom: -4px;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border: 4px solid transparent;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border-top: 4px solid rgba(102, 126, 234, 0.8);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border-radius: 50%;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 animation: spin 1.5s linear infinite reverse;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .loader::after \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 content: '';
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 position: absolute;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 top: 2px;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 left: 2px;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 right: 2px;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 bottom: 2px;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border: 2px solid transparent;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border-top: 2px solid rgba(118, 75, 162, 0.8);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border-radius: 50%;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 animation: spin 0.8s linear infinite;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 @keyframes spin \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0% \{ transform: rotate(0deg); \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 100% \{ transform: rotate(360deg); \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .toast-container \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 position: fixed;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 bottom: 2rem;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 right: 2rem;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 z-index: 1000;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 animation: toastSlideIn 0.5s ease-out;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 @keyframes toastSlideIn \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0% \{ transform: translateY(100%); opacity: 0; \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 100% \{ transform: translateY(0); opacity: 1; \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .version-tag \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 font-size: 0.7rem;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 color: rgba(160, 174, 192, 0.8);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 margin-left: 0.5rem;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 background: linear-gradient(45deg, rgba(102, 126, 234, 0.3), rgba(118, 75, 162, 0.3));
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 padding: 2px 8px;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border-radius: 10px;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border: 1px solid rgba(255, 255, 255, 0.1);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 animation: versionPulse 3s ease-in-out infinite;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 @keyframes versionPulse \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0%, 100% \{ opacity: 0.6; transform: scale(1); \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 50% \{ opacity: 1; transform: scale(1.05); \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .floating-particles \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 position: fixed;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 top: 0;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 left: 0;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 width: 100%;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 height: 100%;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 pointer-events: none;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 z-index: 1;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .particle \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 position: absolute;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 width: 2px;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 height: 2px;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 background: rgba(255, 255, 255, 0.1);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border-radius: 50%;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 animation: float 20s infinite linear;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 @keyframes float \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 0% \{ transform: translateY(100vh) rotate(0deg); opacity: 0; \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 10% \{ opacity: 1; \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 90% \{ opacity: 1; \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 100% \{ transform: translateY(-100px) rotate(360deg); opacity: 0; \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 @media (max-width: 768px) \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 .sidebar-3d \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 position: relative;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 backdrop-filter: blur(20px);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 ::-webkit-scrollbar \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 width: 8px;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 ::-webkit-scrollbar-track \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 background: rgba(30, 41, 59, 0.3);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border-radius: 10px;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 ::-webkit-scrollbar-thumb \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 background: linear-gradient(135deg, rgba(102, 126, 234, 0.8), rgba(118, 75, 162, 0.8));
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 border-radius: 10px;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 ::-webkit-scrollbar-thumb:hover \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 background: linear-gradient(135deg, rgba(102, 126, 234, 1), rgba(118, 75, 162, 1));
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 `\}</style>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 <div className="floating-particles">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \{[...Array(20)].map((_, i) => (
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <div
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 key=\{i\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 className="particle"
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 style=\{\{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 left: `$\{Math.random() * 100\}%`,
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 animationDelay: `$\{Math.random() * 20\}s`,
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 animationDuration: `$\{15 + Math.random() * 10\}s`
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 />
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 ))\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 </div>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 <div className="flex w-full main-container">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 <aside className="w-64 flex-shrink-0 sidebar-3d p-4 flex flex-col relative self-start sticky top-0 h-screen">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <div className="mb-6">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <div className="flex items-center gap-3">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <div className="relative">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <Settings className="w-10 h-10 text-blue-400" />
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <Clock className="w-6 h-6 text-white absolute -bottom-1 -right-1" />
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </div>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <h1 className="text-2xl font-bold sidebar-title">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 WorkClock
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <span className="version-tag">V.3.5</span>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </h1>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </div>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </div>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <nav className="flex-grow">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <ul className="space-y-2">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 \{block1Items.map((item) => \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 const isActive = location.pathname === item.url || 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 (item.url.includes('/Arbeit2') && location.pathname === '/');
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 return (
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <li key=\{item.title\}>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <Link
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 to=\{item.url\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 className=\{`flex items-center gap-3 px-3 py-2 text-sm font-medium nav-item-3d $\{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 isActive 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 ? 'nav-item-active text-white' 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 : 'text-gray-300 hover:text-white'
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}`\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 >
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <item.icon className="w-5 h-5 relative z-10" />
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <span className="relative z-10">\{item.title\}</span>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </Link>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </li>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 );
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 \})\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </ul>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <div className="my-6 px-3">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Verwaltung</p>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </div>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <ul className="space-y-2">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 \{block2Items.map((item) => \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 const isActive = location.pathname === item.url;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 return (
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <li key=\{item.title\}>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <Link
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 to=\{item.url\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 className=\{`flex items-center gap-3 px-3 py-2 text-sm font-medium nav-item-3d $\{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 isActive 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 ? 'nav-item-active text-white' 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 : 'text-gray-300 hover:text-white'
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}`\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 >
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <item.icon className="w-5 h-5 relative z-10" />
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <span className="relative z-10">\{item.title\}</span>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </Link>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </li>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 );
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 \})\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </ul>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </nav>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 </aside>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 <main className="flex-1 relative">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <div className="p-4">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 \{children\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </div>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 </main>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 </div>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 </div>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 );
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \}
\f1\fs32 \cf3 \
\pard\pardeftab720\partightenfactor0

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \

\f2 \cf2 \'a0
\f1 \cf3 \
\
\
\pard\pardeftab720\partightenfactor0

\f0\fs20 \cf2 import React, \{ useState, useEffect, useCallback \} from "react";
\f1\fs32 \cf3 \

\f0\fs20 \cf2 import \{ Arbeit2Entry \} from "@/entities/Arbeit2Entry";
\f1\fs32 \cf3 \

\f0\fs20 \cf2 import \{ ChevronLeft, ChevronRight \} from "lucide-react";
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 export default function Arbeit2Page() \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 const [currentDate, setCurrentDate] = useState(new Date());
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 const [rows, setRows] = useState([]);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 const [isLoading, setIsLoading] = useState(true);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 const timeToMinutes = (time) => \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 if (!time || time === '.' || time === '00:00') return 0;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 const parts = time.split(':');
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 const hours = Number(parts[0]);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 const minutes = Number(parts[1] || '0');
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 if (isNaN(hours) || isNaN(minutes)) return 0;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 return hours * 60 + minutes;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 \};
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 const minutesToTime = (minutes) => \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 if (isNaN(minutes) || minutes < 0) return '00:00';
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 const h = Math.floor(minutes / 60);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 const m = Math.round(minutes % 60);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 return `$\{String(h).padStart(2, '0')\}:$\{String(m).padStart(2, '0')\}`;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 \};
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 // Kalender f\'fcr spezifischen Monat erstellen
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 const generateMonthCalendar = (date) => \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 const year = date.getFullYear();
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 const month = date.getMonth();
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 const dayNames = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 const daysInMonth = new Date(year, month + 1, 0).getDate();
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 const calendar = [];
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 for (let day = 1; day <= daysInMonth; day++) \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 const currentDate = new Date(year, month, day);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 const dayOfWeek = currentDate.getDay();
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 const dayName = dayNames[dayOfWeek];
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 calendar.push(\{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 id: currentDate.getTime(), // Using timestamp as initial ID
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 date: `$\{String(day).padStart(2, '0')\}.$\{String(month + 1).padStart(2, '0')\}`,
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 day: dayName,
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 vmStart: '',
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 vmEnd: '',
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 nmStart: '',
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 nmEnd: '',
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 pause: '00:00',
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 hours: '00:00',
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 month: month,
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 year: year
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 \});
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 return calendar;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 \};
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 // Daten laden und mit gespeicherten Daten abgleichen
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 const loadData = useCallback(async () => \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 setIsLoading(true);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 try \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 const year = currentDate.getFullYear();
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 const month = currentDate.getMonth();
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 // Alle Eintr\'e4ge f\'fcr den aktuellen Monat laden, sortiert nach Datum
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 const savedEntries = await Arbeit2Entry.filter(\{ month: month, year: year \}, '-date');
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 // Kalender generieren
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 const calendar = generateMonthCalendar(currentDate);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 // Gespeicherte Daten in Kalender einsetzen
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 const updatedCalendar = calendar.map(day => \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 const savedEntry = savedEntries.find(entry => entry.date === day.date);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 if (savedEntry) \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 return \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 ...day,
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 id: savedEntry.id, // Use actual DB ID if available
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 vmStart: savedEntry.vmStart || '',
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 vmEnd: savedEntry.vmEnd || '',
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 nmStart: savedEntry.nmStart || '',
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 nmEnd: savedEntry.nmEnd || '',
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 pause: savedEntry.pause || '00:00',
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 hours: savedEntry.hours || '00:00'
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 \};
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 return day;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 \});
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 setRows(updatedCalendar);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 \} catch (error) \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 console.error('Fehler beim Laden der Daten:', error);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 setRows(generateMonthCalendar(currentDate)); // Fallback to empty calendar
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 setIsLoading(false);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 \}, [currentDate]); // Dependency array for useCallback
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 // Daten laden bei \'c4nderung des Datums
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 useEffect(() => \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 loadData();
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 \}, [loadData]); // Dependency array for useEffect
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 // Jahr wechseln
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 const goToPreviousYear = () => \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 const newDate = new Date(currentDate.getFullYear() - 1, currentDate.getMonth(), 1);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 setCurrentDate(newDate);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 \};
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 const goToNextYear = () => \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 const newDate = new Date(currentDate.getFullYear() + 1, currentDate.getMonth(), 1);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 setCurrentDate(newDate);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 \};
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 // Monat wechseln
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 const handleMonthChange = (event) => \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 const newMonth = parseInt(event.target.value, 10);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 const newDate = new Date(currentDate.getFullYear(), newMonth, 1);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 setCurrentDate(newDate);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 \};
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 const handleInputChange = async (id, field, value) => \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 const updatedRows = rows.map(row => \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 if (row.id === id) \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 let updatedValue = value;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 // Zeit-Validation und Formatierung
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 if (['vmStart', 'vmEnd', 'nmStart', 'nmEnd'].includes(field)) \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 let sanitizedValue = value.replace(/[^0-9:]/g, '');
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 const colonCount = (sanitizedValue.match(/:/g) || []).length;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 if (colonCount > 1) \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 const firstColonIndex = sanitizedValue.indexOf(':');
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 sanitizedValue = sanitizedValue.substring(0, firstColonIndex + 1) + 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 sanitizedValue.substring(firstColonIndex + 1).replace(/:/g, '');
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 const digitsOnly = sanitizedValue.replace(/:/g, '');
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 if (digitsOnly.length >= 3 && !sanitizedValue.includes(':')) \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 sanitizedValue = `$\{digitsOnly.slice(0, 2)\}:$\{digitsOnly.slice(2)\}`;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 updatedValue = sanitizedValue.slice(0, 5); // Max 5 characters (HH:MM)
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 const newRow = \{ ...row, [field]: updatedValue \};
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 // Pause berechnen
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 const vmEndMins = timeToMinutes(newRow.vmEnd);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 const nmStartMins = timeToMinutes(newRow.nmStart);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 let pauseMins = 0;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 if (nmStartMins > vmEndMins && vmEndMins > 0) \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 pauseMins = nmStartMins - vmEndMins;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 newRow.pause = minutesToTime(pauseMins);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 // Stunden berechnen: (VM Ende - VM Start) + (NM Ende - NM Start)
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 const vmStartMins = timeToMinutes(newRow.vmStart);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 const nmEndMins = timeToMinutes(newRow.nmEnd);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 let workVm = 0;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 if (vmStartMins !== 0 && vmEndMins !== 0) \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 workVm = vmEndMins > vmStartMins ? vmEndMins - vmStartMins : 0;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 let workNm = 0;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 if (nmStartMins !== 0 && nmEndMins !== 0) \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 workNm = nmEndMins > nmStartMins ? nmEndMins - nmStartMins : 0;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 const totalWorkMins = workVm + workNm;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 newRow.hours = minutesToTime(totalWorkMins);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 // Daten in Datenbank speichern
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 const saveData = async () => \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 try \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 const dataToSave = \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 date: newRow.date,
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 day: newRow.day,
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 vmStart: newRow.vmStart,
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 vmEnd: newRow.vmEnd,
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 nmStart: newRow.nmStart,
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 nmEnd: newRow.nmEnd,
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 pause: newRow.pause,
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 hours: newRow.hours,
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 month: newRow.month,
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 year: newRow.year
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 \};
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 // Check if row.id is already a database ID (string, usually longer than a timestamp number)
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 if (typeof newRow.id === 'string' && newRow.id.length > 5) \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 await Arbeit2Entry.update(newRow.id, dataToSave);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 \} else \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 // If not, try to find an existing entry by its unique date fields
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 const existingEntry = await Arbeit2Entry.filter(\{ date: newRow.date, month: newRow.month, year: newRow.year \});
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 if (existingEntry.length > 0) \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 // If found, update the existing entry using its database ID
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 await Arbeit2Entry.update(existingEntry[0].id, dataToSave);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 \} else \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 // If not found, create a new entry
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 const created = await Arbeit2Entry.create(dataToSave);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 // Update the row's ID in the state to reflect the actual DB ID
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 newRow.id = created.id; 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 \} catch (error) \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 console.error('Fehler beim Speichern:', error);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \};
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 saveData();
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 return newRow;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 return row;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 \});
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 setRows(updatedRows);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 \};
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 // Calculate total hours for the month
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 const totalMonthHours = minutesToTime(rows.reduce((acc, row) => acc + timeToMinutes(row.hours), 0));
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 if (isLoading) \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 return (
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 <div className="flex flex-col items-center justify-center h-full">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 <div className="loader"></div>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 <p className="mt-4 text-gray-400">Daten werden geladen...</p>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 </div>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 );
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 return (
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 <div className="font-inter mx-auto max-w-full">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 <style>\{`
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 .compact-input \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 min-height: 26px !important;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 padding: 2px 6px !important;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 font-size: 13px !important;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 `\}</style>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 \{/* Header mit Jahr/Monat Navigation */\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 <header className="flex flex-col items-center justify-center w-full px-4 py-2 text-center glassmorphism rounded-lg shadow-xl md:flex-row md:justify-between mb-2">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 <div className="flex flex-col md:flex-row items-center gap-4">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <h1 className="text-xl font-bold text-gray-50 md:text-2xl">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 Zeiterfassung
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <span className="version-tag">V.3.5</span>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </h1>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <div className="glassmorphism p-2 px-4 rounded-lg mt-2 md:mt-0">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <p className="text-sm text-gray-400">Gesamtstunden</p>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <p className="text-lg font-bold text-blue-400">\{totalMonthHours\}</p>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </div>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 </div>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 <div className="flex items-center mt-2 space-x-2 md:mt-0">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <button onClick=\{goToPreviousYear\} className="button-3d px-2 py-1 text-gray-400" aria-label="Vorheriges Jahr">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <ChevronLeft className="w-5 h-5" />
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </button>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <span className="text-lg font-medium text-gray-50">\{currentDate.getFullYear()\}</span>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <button onClick=\{goToNextYear\} className="button-3d px-2 py-1 text-gray-400" aria-label="N\'e4chstes Jahr">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <ChevronRight className="w-5 h-5" />
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </button>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <select
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 className="input-3d py-1 text-gray-400 ml-2"
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 value=\{currentDate.getMonth()\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 onChange=\{handleMonthChange\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 aria-label="Monat ausw\'e4hlen"
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 >
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 \{['Januar', 'Februar', 'M\'e4rz', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'].map((month, index) => (
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <option key=\{index\} value=\{index\} className="text-gray-200 bg-gray-700">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 \{month\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </option>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 ))\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </select>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 </div>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 </header>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 \{/* Kompakte Tabelle */\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 <main className="table-3d">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 <table className="min-w-full divide-y divide-gray-700">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <thead className="bg-gray-700/50">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <tr>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <th scope="col" className="px-2 py-2 text-left text-xs font-medium text-gray-400 whitespace-nowrap">Datum</th>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <th scope="col" className="px-2 py-2 text-left text-xs font-medium text-gray-400 whitespace-nowrap">Tag</th>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <th scope="col" className="px-1 py-2 text-left text-xs font-medium text-gray-400 whitespace-nowrap">VM Start</th>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <th scope="col" className="px-1 py-2 text-left text-xs font-medium text-gray-400 whitespace-nowrap">VM Ende</th>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <th scope="col" className="px-1 py-2 text-left text-xs font-medium text-gray-400 whitespace-nowrap">NM Start</th>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <th scope="col" className="px-1 py-2 text-left text-xs font-medium text-gray-400 whitespace-nowrap">NM Ende</th>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <th scope="col" className="px-1 py-2 text-left text-xs font-medium text-gray-400 whitespace-nowrap">Pause</th>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <th scope="col" className="px-2 py-2 text-left text-xs font-medium text-gray-400 whitespace-nowrap">Stunden</th>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </tr>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </thead>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <tbody className="bg-gray-800/20 divide-y divide-gray-700">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 \{rows.map((row) => (
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <tr key=\{row.id\} className="table-row-3d ultra-compact-row">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <td className="px-2 py-0 text-xs text-gray-300 whitespace-nowrap">\{row.date\}</td>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <td className="px-2 py-0 text-xs font-medium text-gray-400 whitespace-nowrap">\{row.day\}</td>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <td className="px-1 py-0 whitespace-nowrap">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <input 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 type="text" 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 className="input-3d w-20 text-xs font-medium ultra-compact-input" 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 value=\{row.vmStart\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 onChange=\{(e) => handleInputChange(row.id, 'vmStart', e.target.value)\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 aria-label=\{`Vormittag Start f\'fcr $\{row.date\}`\} 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 />
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </td>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <td className="px-1 py-0 whitespace-nowrap">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <input 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 type="text" 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 className="input-3d w-20 text-xs font-medium ultra-compact-input" 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 value=\{row.vmEnd\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 onChange=\{(e) => handleInputChange(row.id, 'vmEnd', e.target.value)\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 aria-label=\{`Vormittag Ende f\'fcr $\{row.date\}`\} 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 />
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </td>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <td className="px-1 py-0 whitespace-nowrap">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <input 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 type="text" 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 className="input-3d w-20 text-xs font-medium ultra-compact-input" 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 value=\{row.nmStart\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 onChange=\{(e) => handleInputChange(row.id, 'nmStart', e.target.value)\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 aria-label=\{`Nachmittag Start f\'fcr $\{row.date\}`\} 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 />
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </td>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <td className="px-1 py-0 whitespace-nowrap">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <input 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 type="text" 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 className="input-3d w-20 text-xs font-medium ultra-compact-input" 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 value=\{row.nmEnd\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 onChange=\{(e) => handleInputChange(row.id, 'nmEnd', e.target.value)\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 aria-label=\{`Nachmittag Ende f\'fcr $\{row.date\}`\} 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 />
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </td>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <td className="px-1 py-0 text-xs font-bold text-gray-200 whitespace-nowrap">\{row.pause\}</td>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <td className="px-2 py-0 text-xs font-bold text-blue-400 whitespace-nowrap">\{row.hours\}</td>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </tr>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 ))\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </tbody>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 </table>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 </main>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 </div>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 );
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \}
\f1\fs32 \cf3 \
\pard\pardeftab720\partightenfactor0

\f2 \cf2 \'a0
\f1 \cf3 \
}