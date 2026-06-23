import { navigateTo } from "../router/router.js";
export function home() {
  return `
  
 <header class="font-sans text-blue-950 flex items-center justify-between h-20 pl-4 sm:pl-6 md:pl-10 pr-2 sm:pr-4 md:pr-8">
    <figure class="w-60 flex items-center gap-4">
        <h1 class=" text-3xl font-bold">Barranquilla</h1>
        <img class="w-32" src="/src/assets/img/logo.png" alt="Logo">
    </figure>
        <nav class="">
            <ul class="flex gap-4 font-medium">
                <li><a href="">Inicio</a></li>
                <li><a href="">Destinos</a></li>
                <li><a href="">Eventos</a></li>
                <li><a href="">Nosotros</a></li>
                
                <li> <i class="fas fa-check-circle"></i> <a href="">Iniciar Sesión</a></li>
            </ul>
        </nav>
    </header>
    <main>
    <section class="hero w-full h-150 relative"> 
        <img class="w-full h-full object-cover" src="/src/assets/img/hero.png" alt="Hero Image">
        <p class="absolute bottom-1/4 right-6 text-white">
        <span> Descubre la magia de </span><br>
        <span> Barranquilla </span> <br>
        <span> Explora, vive y disfruta todo lo que <br> nuestra ciudad tiene <b>para ti</b>. </span>
        </p>
    </section>

    </main>
    
    <footer>

    </footer>
    `;
}

export function homeEvents() {}
