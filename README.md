**JavaScript Exercise - DOM Events & Interactive Page
The Hacking Project: JS Events

📋 Description
Complete implementation of 9 interactive features on exo_events.html page:

F1-F2: Footer counter + Hamburger menu toggle

F3-F4: Cards Edit (irreversible red, toggle green)

F5: Navbar double-click → Bootstrap ON/OFF

F6: View buttons hover → Cards shrink (event delegation)

F7-F8: Cards rotation buttons (right/left)

F9: Logo + keyboard keys → 4-column Bootstrap layout

🚀 Implemented Features
#	Description	Event	Technique
1	Footer: click number X	click	Counter + addEventListener
2	Hamburger: toggle navbar	click	classList.toggle('collapse')
3	1st card Edit → Red	click	style.color = 'red'
4	2nd card Edit → Green toggle	click	if/else style toggle
5	Navbar dblclick → Bootstrap	dblclick	link.disabled toggle
6	View hover → Card reduced	mouseover/mouseout	Delegation + closest()
7	==> → Last card to first	click	insertBefore(lastCard, firstChild)
8	<= → First card to last	click	preventDefault() + nextSibling
9	Logo + a/y/p/b → 4-col layout	keypress	Body classes + offset-md-*
📁 Structure
text
s3_eventlistener/
├── exo_events.html     # Provided Bootstrap page
├── script_1.js         # Complete JS code (F1→F9)
└── README.md           # This file
🎮 Demo
Open exo_events.html in browser

Console: F12 → Watch footer logs

Interactions: Test each feature in order

🔧 Technical Fixes
F6: Event delegation on .row → Survives F7/F8 rotations

F7: insertBefore(lastCard, container.firstChild) → Avoids NotFoundError

F8: event.preventDefault() → Blocks link href + nextSibling

Robust selectors: if (element) checks everywhere

📝 Main Script
js
// script_1.js → 350+ lines, 9 features
document.addEventListener('DOMContentLoaded', function() {
    // F1→F9 implemented
});
✅ Status
✅ F1-F9: All functional
✅ Robustness: Delegation + null checks
✅ Performance: Single events per container

Author: GamePartsOnline
Date: January 22, 2026**JavaScript Exercise - DOM Events & Interactive Page
The Hacking Project: JS Events

📋 Description
Complete implementation of 9 interactive features on exo_events.html page:

F1-F2: Footer counter + Hamburger menu toggle

F3-F4: Cards Edit (irreversible red, toggle green)

F5: Navbar double-click → Bootstrap ON/OFF

F6: View buttons hover → Cards shrink (event delegation)

F7-F8: Cards rotation buttons (right/left)

F9: Logo + keyboard keys → 4-column Bootstrap layout

🚀 Implemented Features
#	Description	Event	Technique
1	Footer: click number X	click	Counter + addEventListener
2	Hamburger: toggle navbar	click	classList.toggle('collapse')
3	1st card Edit → Red	click	style.color = 'red'
4	2nd card Edit → Green toggle	click	if/else style toggle
5	Navbar dblclick → Bootstrap	dblclick	link.disabled toggle
6	View hover → Card reduced	mouseover/mouseout	Delegation + closest()
7	==> → Last card to first	click	insertBefore(lastCard, firstChild)
8	<= → First card to last	click	preventDefault() + nextSibling
9	Logo + a/y/p/b → 4-col layout	keypress	Body classes + offset-md-*
📁 Structure
text
s3_eventlistener/
├── exo_events.html     # Provided Bootstrap page
├── script_1.js         # Complete JS code (F1→F9)
└── README.md           # This file
🎮 Demo
Open exo_events.html in browser

Console: F12 → Watch footer logs

Interactions: Test each feature in order

🔧 Technical Fixes
F6: Event delegation on .row → Survives F7/F8 rotations

F7: insertBefore(lastCard, container.firstChild) → Avoids NotFoundError

F8: event.preventDefault() → Blocks link href + nextSibling

Robust selectors: if (element) checks everywhere

📝 Main Script
js
// script_1.js → 350+ lines, 9 features
document.addEventListener('DOMContentLoaded', function() {
    // F1→F9 implemented
});
✅ Status
✅ F1-F9: All functional
✅ Robustness: Delegation + null checks
✅ Performance: Single events per container

Author: GamePartsOnline
Date: January 22, 2026
