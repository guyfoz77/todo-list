(()=>{"use strict";let e=[];const t=document.querySelector(".newProjectButton"),n=document.querySelector(".newProjectInput"),o=document.querySelector(".projectList");t.addEventListener("click",(t=>{var r;t.preventDefault(),""!=n.value&&(function(e){for(;e.firstChild;)e.removeChild(e.firstChild)}(o),r=n.value,e.push({name:r,todos:[]}),e.forEach((e=>{o.append(function(e){return function(e,t,n,o){const r=document.createElement(e);return""!=t&&("object"==typeof t?t.forEach((e=>{r.classList.add(e)})):r.classList.add(t)),""!=n&&(r.value=n,r.textContent=n),""!=o&&(r.dataset.element=o),r}("div","projectCard",e,"")}(e.name))})),n.value="")}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBQU8sSUFBSUEsRUFBVyxHQ0d0QixNQUFNQyxFQUFtQkMsU0FBU0MsY0FBYyxxQkFDMUNDLEVBQWVGLFNBQVNDLGNBQWMsb0JBQ3RDRSxFQUFjSCxTQUFTQyxjQUFjLGdCQUUzQ0YsRUFBaUJLLGlCQUFpQixTQUFTQyxJRExwQyxJQUF1QkMsRUNNMUJELEVBQUVFLGlCQUN3QixJQUF0QkwsRUFBYU0sUUNSZCxTQUFzQkMsR0FDekIsS0FBT0EsRUFBUUMsWUFDWEQsRUFBUUUsWUFBWUYsRUFBUUMsV0FFcEMsQ0RLSUUsQ0FBYVQsR0RSYUcsRUNTWkosRUFBYU0sTURSM0JWLEVBQVNlLEtBQUssQ0FDVlAsS0FBTUEsRUFDTlEsTUFBTyxLQ09YaEIsRUFBU2lCLFNBQVFDLElBQ2JiLEVBQVljLE9DV2IsU0FBNEJYLEdBRS9CLE9BbkJKLFNBQXdCRyxFQUFTUyxFQUFXQyxFQUFhQyxHQUNyRCxNQUFNQyxFQUFXckIsU0FBU3NCLGNBQWNiLEdBYXhDLE1BWmlCLElBQWJTLElBQ3dCLGlCQUFiQSxFQUNQQSxFQUFVSCxTQUFRUSxJQUNkRixFQUFTSCxVQUFVTSxJQUFJRCxFQUFXLElBRW5DRixFQUFTSCxVQUFVTSxJQUFJTixJQUVmLElBQWZDLElBQ0FFLEVBQVNiLE1BQVFXLEVBQ2pCRSxFQUFTRixZQUFjQSxHQUVYLElBQVpDLElBQWdCQyxFQUFTSSxRQUFRaEIsUUFBVVcsR0FDeENDLENBQ1gsQ0FHc0JLLENBQWUsTUFBTyxjQUFlcEIsRUFBTSxHQUVqRSxDRGQyQnFCLENBQW1CWCxFQUFRVixNQUFLLElBRXZESixFQUFhTSxNQUFRLEdBQUUsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0TWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbUNvbnRyb2xsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGxldCBwcm9qZWN0cyA9IFtdXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdQcm9qZWN0KG5hbWUpIHtcbiAgICBwcm9qZWN0cy5wdXNoKHtcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgdG9kb3M6IFtdXG4gICAgfSlcbn0iLCJpbXBvcnQgeyBwcm9qZWN0cywgYWRkTmV3UHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RNYW5hZ2VyXCI7XG5pbXBvcnQgeyBwcm9qZWN0Q2FyZEJ1aWxkZXIsIGNsZWFyRWxlbWVudCB9IGZyb20gXCIuL2RvbUNvbnRyb2xsZXJcIjtcblxuY29uc3QgbmV3UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdQcm9qZWN0QnV0dG9uJyk7XG5jb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3UHJvamVjdElucHV0Jyk7XG5jb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0TGlzdCcpO1xuXG5uZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChwcm9qZWN0SW5wdXQudmFsdWUgPT0gJycgfHwgbnVsbCkgcmV0dXJuO1xuICAgIGNsZWFyRWxlbWVudChwcm9qZWN0TGlzdCk7XG4gICAgYWRkTmV3UHJvamVjdChwcm9qZWN0SW5wdXQudmFsdWUpO1xuICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIHByb2plY3RMaXN0LmFwcGVuZChwcm9qZWN0Q2FyZEJ1aWxkZXIocHJvamVjdC5uYW1lKSlcbiAgICB9KTtcbiAgICBwcm9qZWN0SW5wdXQudmFsdWUgPSAnJztcbn0pIiwiXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJFbGVtZW50KGVsZW1lbnQpIHtcbiAgICB3aGlsZSAoZWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGVsZW1lbnRCdWlsZGVyKGVsZW1lbnQsIGNsYXNzTGlzdCwgdGV4dENvbnRlbnQsIGRhdGFOYW1lKSB7ICAvL2VsZW1lbnQgYnVpbGRlciBjb3BpZWQgYW5kIG1vZGlmaWVkIGZyb20gcHJldmlvdXMgcHJvamVjdC5cbiAgICBjb25zdCB4ZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgaWYgKGNsYXNzTGlzdCAhPSAnJykge1xuICAgICAgICBpZiAodHlwZW9mIGNsYXNzTGlzdCA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgY2xhc3NMaXN0LmZvckVhY2goY2xhc3NMYWJlbCA9PiB7XG4gICAgICAgICAgICAgICAgeGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc0xhYmVsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgeGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc0xpc3QpO1xuICAgIH1cbiAgICBpZiAodGV4dENvbnRlbnQgIT0gJycpIHtcbiAgICAgICAgeGVsZW1lbnQudmFsdWUgPSB0ZXh0Q29udGVudDtcbiAgICAgICAgeGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcbiAgICB9XG4gICAgaWYgKGRhdGFOYW1lICE9ICcnKSB4ZWxlbWVudC5kYXRhc2V0LmVsZW1lbnQgPSBkYXRhTmFtZTtcbiAgICByZXR1cm4geGVsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0Q2FyZEJ1aWxkZXIobmFtZSkge1xuICAgIGxldCBwcm9qZWN0Q2FyZCA9IGVsZW1lbnRCdWlsZGVyKCdkaXYnLCAncHJvamVjdENhcmQnLCBuYW1lLCAnJyk7XG4gICAgcmV0dXJuIHByb2plY3RDYXJkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9kb0NhcmRCdWlsZGVyKHRpdGxlLCBpZCwgZHVlRGF0ZSA9ICdObyBkdWUgZGF0ZScpIHsgLy9pZCB3aWxsIGJlIHRoZSBwb3NpdGlvbiBvZiB0aGUgdG9kbyBpbiB0aGUgc3RvcmFnZSBhcnJheS5cbiAgICBsZXQgdG9kb0NhcmQgPSBlbGVtZW50QnVpbGRlcignZGl2JywgJ3RvZG9DYXJkJywgJycsIGlkKTtcbiAgICBsZXQgY29tcGxldGUgPSBlbGVtZW50QnVpbGRlcignZGl2JywgJ2NvbXBsZXRlJywgJycsICcnKTtcbiAgICAgICAgY29tcGxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0b2RvQ2FyZC5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZScpO1xuICAgICAgICB9KVxuICAgIGxldCB0b2RvVGl0bGUgPSBlbGVtZW50QnVpbGRlcignaDInLCAnJywgdGl0bGUsICcnKTtcbiAgICBsZXQgdG9kb0R1ZURhdGUgPSBlbGVtZW50QnVpbGRlcignaDMnLCAnJywgZHVlRGF0ZSwgJycpO1xuICAgICAgICB0b2RvRHVlRGF0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAvL2NvZGUgaGVyZSB0byBsb2FkIGEgZGF0ZSBwaWNrZXIgd2hpY2ggY2FuIGFsbG93IHRoZSB1c2VyIHRvIGVkaXQgdGhlIGRhdGUgb24gdGhlIHRvZG8uXG4gICAgICAgIH0pXG4gICAgdG9kb0NhcmQuYXBwZW5kKGNvbXBsZXRlLCB0b2RvVGl0bGUsIHRvZG9EdWVEYXRlKTtcbiAgICByZXR1cm4gdG9kb0NhcmQ7XG59XG4iXSwibmFtZXMiOlsicHJvamVjdHMiLCJuZXdQcm9qZWN0QnV0dG9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicHJvamVjdElucHV0IiwicHJvamVjdExpc3QiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsIm5hbWUiLCJwcmV2ZW50RGVmYXVsdCIsInZhbHVlIiwiZWxlbWVudCIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImNsZWFyRWxlbWVudCIsInB1c2giLCJ0b2RvcyIsImZvckVhY2giLCJwcm9qZWN0IiwiYXBwZW5kIiwiY2xhc3NMaXN0IiwidGV4dENvbnRlbnQiLCJkYXRhTmFtZSIsInhlbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGFiZWwiLCJhZGQiLCJkYXRhc2V0IiwiZWxlbWVudEJ1aWxkZXIiLCJwcm9qZWN0Q2FyZEJ1aWxkZXIiXSwic291cmNlUm9vdCI6IiJ9