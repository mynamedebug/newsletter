/* style.css */
body {margin:0; font-family: 'Arial', sans-serif; color:#333;}
.top-banner {background:#2d1c14; color:#fff; text-align:center; padding:0.5rem; font-size:0.9rem;}
.top-banner .notify-btn {background:#f97316; color:#fff; border:none; padding:0.4rem 0.8rem; border-radius:4px; cursor:pointer; margin-left:0.5rem;}
.header {display:flex; justify-content:space-between; align-items:center; padding:1rem 2rem; background:#fff; border-bottom:1px solid #eee;}
.social-icons a {margin-right:0.8rem; text-decoration:none; font-size:0.85rem; color:#555;}
.logo {font-size:1.5rem; font-weight:bold;}
.nav a {margin-left:1rem; text-decoration:none; color:#333; font-weight:500;}
.hero {display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; padding:3rem 2rem; background:linear-gradient(135deg,#fda4af,#fbcfe8);}
.hero-text h1 {font-size:2.5rem; margin-bottom:1rem;}
.hero-text .subtitle {font-size:1rem; color:#444;}
.hero-image img {max-width:300px; margin-top:1rem;}
.tags {display:flex; flex-wrap:wrap; justify-content:center; gap:0.5rem; padding:1.5rem; background:#fff7f7;}
.tag {background:#eee; padding:0.4rem 0.8rem; border-radius:999px; font-size:0.85rem; font-weight:500;}
.tag.highlight {background:#facc15; color:#333;}
.info {text-align:center; padding:3rem 1.5rem; background:#fffdfa;}
.info h2 {font-size:2rem; color:#6b2f1d;}
.info h2 span {display:block; font-weight:normal; color:#444;}
.info-desc {margin-top:1rem; font-size:1rem; color:#555; max-width:600px; margin-left:auto; margin-right:auto;}

/* Benefits Section */
.benefits {background:#fff6f3; text-align:center; padding:4rem 2rem;}
.benefits-label {display:inline-block; padding:0.3rem 1rem; border:1px solid #333; border-radius:999px; font-size:0.8rem; margin-bottom:1rem;}
.benefits-title {font-size:2rem; color:#4b1d0f; margin-bottom:2rem;}
.benefits-title span {display:block; font-weight:normal; color:#555;}
.benefits-grid {display:grid; grid-template-columns:repeat(auto-fit,minmax(250px,1fr)); gap:1rem;}
.benefit-card {border-radius:16px; padding:1.5rem; color:#fff; text-align:left; font-size:0.9rem;}
.benefit-card h4 {margin:0 0 0.5rem; font-size:1.2rem;}
.benefit-card.brown {background:#7b3f2c;}
.benefit-card.yellow {background:#f59e0b; color:#111;}
.benefit-card.pink {background:#f47291;}
.benefit-card.image {padding:0; overflow:hidden;}
.benefit-card.image img {width:100%; height:auto; display:block; border-radius:16px;}

.footer {background:#2d1c14; color:#fff; text-align:center; padding:2rem 1rem; margin-top:3rem;}
.footer h2 {font-size:2rem; margin:0;}

@media(max-width:768px){
  .hero {flex-direction:column; text-align:center;}
  .hero-image img {max-width:200px;}
}
