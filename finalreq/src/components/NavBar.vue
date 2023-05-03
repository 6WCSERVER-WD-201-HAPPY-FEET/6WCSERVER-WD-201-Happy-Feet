<template>
  <div id="nav-bar">
    <router-link to="/products" id="products-link">
      <h1 class="rainbow rainbow_text_animated">HAPPY FEET</h1>
    </router-link>
      <router-link to="/products" id="nav-home">
        <button>Home</button>
      </router-link>
      <router-link to="/login" id="nav-login">
        <button>Login</button>
      </router-link>
      <router-link to="/signup" id="nav-about">
        <button>Sign up</button>
      </router-link>
    <router-link to="/cart" id="cart-link">
      <button>Shopping Cart</button>
    </router-link>
  </div>
</template>

<script>
export default {
    name: 'NavBar',
}
</script>

<style scoped>
  #nav-bar {
    margin: auto;
    border-bottom: 1px solid #ddd;
    height: 75px;
    width: 100%;
  }

  #products-link {
    text-align: center;
    display: block;
    font-size: 22px;
    left: 32px;
    position: absolute;
    top: 16px;
    text-decoration: none;
  }

  .rainbow {
    text-align: center;
    text-decoration: underline;
    font-size: 32px;
    font-family: monospace;
    letter-spacing: 4px;
}
.rainbow_text_animated {
    background: linear-gradient(to right, #6666ff, #0099ff , #00ff00, #ff3399, #6666ff);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: rainbow_animation 6s ease-in-out infinite;
    background-size: 400% 100%;
}

@keyframes rainbow_animation {
    0%,100% {
        background-position: 0 0;
    }

    50% {
        background-position: 100% 0;
    }
}

  #products-link h1 {
      margin: 0;
  }

  #cart-link {
    position: absolute;
    right: 16px;
    top: 16px;
  }

  #nav-home {
    position: absolute;
    right: 435px;
    top: 16px;
  }

  #nav-about {
    position: absolute;
    right: 200px;
    top: 16px;
  }

  #nav-login {
    position: absolute;
    right: 320px;
    top: 16px;
  }
</style>
