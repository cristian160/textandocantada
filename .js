  function mostrarCantada() {
            const cantadas = {
                "Romântica": [
                    { text: "Você é a razão pela qual meu coração bate mais rápido!", img: "274295614b1f1971b08ab25420222b6a.jpg" }
                ],
                "Nerd": [
                    { text: "Você não é a vampira do X-Men, mas já tirou o meu ar só de passar do meu lado!", img:"97c44e9a5ebfac3397fb3ac1d713133b.jpg"},
                   
                ],
                "Engracada": [
                    { text: "Gata, me passa seu Twitter? É que minha mandou falou para eu seguir meus sonhos", img: "Twitter-3.jpg" },
                ]
            };

            const categoria = document.getElementById("categoria").value;
            const index = Math.floor(Math.random() * cantadas[categoria].length);
            const cantadaElemento = document.getElementById('cantada');
            const imagemElemento = document.getElementById('imagem');
            
            cantadaElemento.innerText = cantadas[categoria][index].text;
            cantadaElemento.classList.remove('hidden');
            
            imagemElemento.src = cantadas[categoria][index].img;
            imagemElemento.classList.remove('hidden');
        }

