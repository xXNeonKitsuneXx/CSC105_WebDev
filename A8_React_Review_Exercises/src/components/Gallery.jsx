import React from 'react'
import '../styles/gallery_styles.css'

function Gallery() {
  return (
    <section class = "g">
        <h2>Gallery</h2>
        <ul>
            <li><img class="center" src="assets/KON KON KITSUNE.gif" alt="Fubuki" width = "200"/></li>
            <li><img class="center" src="assets/Tensei_Girl_H.gif"  alt="H" width = "200"/></li>
            <li><img class="center" src="assets/Tensei_Girl_W.gif" alt="W" width = "200"/></li>
        </ul>
    </section>
  )
}

export default Gallery