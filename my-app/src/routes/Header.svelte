<script>
  import Robot from '../images/robotLogo.svg' 
</script>

<div class="drawer">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
  <div class="drawer-content flex flex-col relative">
    <!-- Navbar -->
    <div class="w-full navbar bg-base-300">
      <div class="flex-none lg:hidden">
        <label for="my-drawer-3" class="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <img src={Robot} width="48" height="48"/>
      <div class="flex-1 px-2 mx-2">Cooking Robot</div>
      <div class="flex-none hidden lg:block">
        <ul class="menu menu-horizontal">
          <!-- Navbar menu content here -->
          <li><a>Recipes</a></li>
          <li><a>Even More Recipes</a></li>
        </ul>
      </div>
    </div>
    <!-- Page content here -->
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-3" class="drawer-overlay"></label> 
    <ul class="menu p-4 w-80 bg-base-100">
      <!-- Sidebar content here -->
      <li><a>Recipes</a></li>
      <li><a>More Recipes</a></li>
      
    </ul>
    
  </div>
</div>

git config --global user.email "DenisThuerling@outlook.de"
git config --global user.name "kimimarux"