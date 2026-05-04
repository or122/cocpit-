(function(){
  var toastEl = document.getElementById('cocpit-toast');
  var toastTimer;
  function toast(msg){
    toastEl.textContent = msg;
    toastEl.style.opacity = '1';
    toastEl.style.transform = 'translateX(-50%) translateY(0)';
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function(){
      toastEl.style.opacity = '0';
      toastEl.style.transform = 'translateX(-50%) translateY(20px)';
    }, 1600);
  }

  function activateInGroup(items, target, cls){
    items.forEach(function(b){ b.classList.remove(cls); });
    target.classList.add(cls);
  }

  // Sidebar nav
  var navItems = Array.prototype.slice.call(document.querySelectorAll('aside nav .nav-item'));
  navItems.forEach(function(item){
    item.addEventListener('click', function(){
      activateInGroup(navItems, item, 'active');
      toast('Opened: ' + item.textContent.trim().replace(/\s+/g,' '));
    });
  });

  // Sidebar agent rows
  document.querySelectorAll('.agent-row').forEach(function(row){
    row.addEventListener('click', function(){
      var name = row.querySelector('.ag-name');
      toast('Selected agent: ' + (name ? name.textContent : 'agent'));
    });
  });

  // Segmented controls (Today/Live/7d/All etc.)
  document.querySelectorAll('.seg').forEach(function(seg){
    var btns = Array.prototype.slice.call(seg.querySelectorAll('button'));
    btns.forEach(function(b){
      b.addEventListener('click', function(){
        activateInGroup(btns, b, 'on');
        toast('Filter: ' + b.textContent.trim());
      });
    });
  });

  // Primary "New mission" button & accent buttons
  document.querySelectorAll('.primary-btn, .accent-btn').forEach(function(b){
    b.addEventListener('click', function(){
      toast(b.textContent.trim() + ' — opening…');
    });
  });

  // Ghost buttons (View board, Pause all, Manage, etc.)
  document.querySelectorAll('.ghost-btn').forEach(function(b){
    b.addEventListener('click', function(){
      toast(b.textContent.trim());
    });
  });

  // Icon buttons (top right)
  document.querySelectorAll('.icon-btn').forEach(function(b){
    b.addEventListener('click', function(){
      toast(b.getAttribute('title') || 'Action');
    });
  });

  // Live agent controls (take over / pause / stop)
  document.querySelectorAll('.live-controls .ctl').forEach(function(b){
    b.addEventListener('click', function(){
      toast(b.getAttribute('title') || 'Control');
    });
  });

  // Search input
  var searchInput = document.querySelector('.search input');
  if(searchInput){
    searchInput.addEventListener('keydown', function(e){
      if(e.key === 'Enter' && searchInput.value.trim()){
        toast('Asking the squad: "' + searchInput.value.trim() + '"');
        searchInput.value = '';
      }
    });
  }

  // Browser-mock submit
  var submit = document.querySelector('.b-form .submit');
  if(submit){
    submit.addEventListener('click', function(){
      toast('Search flights — Bingo is on it');
    });
  }

  // Permission toggles
  document.querySelectorAll('.perm').forEach(function(p){
    p.style.cursor = 'pointer';
    p.addEventListener('click', function(){
      p.classList.toggle('off');
      var name = p.querySelector('.perm-name');
      toast((p.classList.contains('off') ? 'Disabled: ' : 'Enabled: ') + (name ? name.textContent : 'permission'));
    });
  });

  // Tool chips (connected apps)
  document.querySelectorAll('.tool-chip').forEach(function(c){
    c.style.cursor = 'pointer';
    c.addEventListener('click', function(){
      toast(c.getAttribute('title') || 'App');
    });
  });
})();
