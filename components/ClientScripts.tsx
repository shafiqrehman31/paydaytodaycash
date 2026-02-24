"use client";

import { useEffect } from "react";

export default function ClientScripts() {
  useEffect(() => {
    const loadScripts = async () => {
      if (typeof window !== 'undefined') {
        // Load jQuery first
        await import('jquery');
        
        // Then load Bootstrap JS
        const bootstrap = await import('bootstrap');
        
        // Function to load script
        const loadScript = (src: string): Promise<void> => {
          return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = () => resolve();
            script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
            document.body.appendChild(script);
          });
        };

        // Load all the JS files
        const scripts = [
          '/js/jquery.nice-select.min.js',
          '/js/jquery.magnific-popup.min.js',
          '/js/circularProgressBar.min.js',
          '/js/slick.min.js',
          '/js/odometer.min.js',
          '/js/viewport.jquery.js',
          '/js/jquery-ui.min.js',
          '/js/wow.min.js',
          '/js/jquery.validate.min.js',
          '/js/plugins.js',
          '/js/main.js'
        ];

        for (const script of scripts) {
          try {
            await loadScript(script);
          } catch (error) {
            console.error('Error loading script:', error);
          }
        }

        // Initialize Bootstrap dropdowns
        setTimeout(() => {
          // Initialize all dropdowns
          const dropdowns = document.querySelectorAll('.dropdown-toggle');
          dropdowns.forEach((dropdown) => {
            new bootstrap.Dropdown(dropdown);
          });

          // Initialize WOW
          if (window.WOW) {
            new window.WOW({
              boxClass: 'wow',
              animateClass: 'animated',
              offset: 0,
              mobile: true,
              live: true
            }).init();
          }

          // Hide preloader
          const preloader = document.querySelector('.preloader');
          if (preloader) {
            setTimeout(() => {
              preloader.classList.add('hide');
            }, 500);
          }
        }, 100);
      }
    };

    loadScripts();
  }, []);
  
  return null;
}