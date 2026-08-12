// ==UserScript==
// @name         Nova Client
// @namespace    https://github.com/ENOL11/Nova-Client
// @version      2.0.0-alpha1
// @description  Un cliente para ChatGPT con HUD, estadísticas y módulos.
// @author       Enol & ChatGPT
// @match        https://chatgpt.com/*
// @icon         https://chatgpt.com/favicon.ico
// @grant        none
// @run-at       document-end
// ==/UserScript==

(() => {
    'use strict';

    // ==========================================
    // Nova Client
    // ==========================================

    const Nova = {
        version: "2.0.0-alpha1",
        build: "001",

        settings: {
            x: 20,
            y: 20,
            visible: true,
            minimized: false
        },

        elements: {},

        init() {
            console.log(
                `%cNova Client ${this.version}`,
                "color:#55ff55;font-size:16px;font-weight:bold;"
            );

            this.loadSettings();
            this.createWindow();
        },

        loadSettings() {
            const saved = localStorage.getItem("nova-client-settings");

            if (!saved) return;

            try {
                this.settings = {
                    ...this.settings,
                    ...JSON.parse(saved)
                };
            } catch (e) {
                console.warn("Nova Client: configuración dañada.");
            }
        },

        saveSettings() {
            localStorage.setItem(
                "nova-client-settings",
                JSON.stringify(this.settings)
            );
        },

        createWindow() {

            const windowEl = document.createElement("div");
            windowEl.id = "nova-client";

            windowEl.style.position = "fixed";
            windowEl.style.left = this.settings.x + "px";
            windowEl.style.top = this.settings.y + "px";

            windowEl.style.width = "320px";
            windowEl.style.background = "#1b1b1b";
            windowEl.style.border = "2px solid #44ff44";
            windowEl.style.borderRadius = "8px";
            windowEl.style.boxShadow = "0 0 20px rgba(0,255,0,.25)";
            windowEl.style.zIndex = "999999";
            windowEl.style.color = "white";
            windowEl.style.fontFamily = "Consolas, monospace";
            windowEl.style.userSelect = "none";

            const title = document.createElement("div");

            title.style.background = "#2b2b2b";
            title.style.padding = "10px";
            title.style.fontWeight = "bold";
            title.style.cursor = "move";

            title.innerHTML =
                "🌌 Nova Client <span style='float:right;color:#55ff55'>v2.0 Alpha</span>";

            const content = document.createElement("div");

            content.style.padding = "12px";

            content.innerHTML = `
                <b>Bienvenido 😎</b>

                <hr>

                Esta es la primera versión del cliente.

                <br><br>

                En la siguiente versión aparecerán:

                <ul>
                    <li>📊 HUD</li>
                    <li>🖱️ Arrastrar</li>
                    <li>➖ Minimizar</li>
                    <li>📈 Estadísticas</li>
                </ul>
            `;

            windowEl.appendChild(title);
            windowEl.appendChild(content);

            document.body.appendChild(windowEl);

            this.elements.window = windowEl;
            this.elements.title = title;
            this.elements.content = content;
        }

    };

    window.Nova = Nova;

    Nova.init();

})();
