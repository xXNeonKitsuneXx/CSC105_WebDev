import React from 'react'
import '../styles/favorite_sites_styles.css'

function FavoriteSites() {
  return (
    <section class = "fsc">
        <h2>Favorite Sites</h2>
        <ul>
          <li><a href="https://hololivepro.com/en/">Hololive</a></li>
          <li><a href="https://myanimelist.net/">MyAnimeList</a></li>
          <li><a href="https://openai.com/blog/chatgpt">ChatGPT</a></li>
          <li><a href="https://www.youtube.com/">Youtube</a></li>
          <li><a href="https://www.tesla.com/en_th">Tesla</a></li>
        </ul>
    </section>
  )
}

export default FavoriteSites