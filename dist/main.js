(()=>{"use strict";let e=[{name:"Test Project",todos:[{title:"Test todo",dueDate:null}]}];function t(e){for(;e.firstChild;)e.removeChild(e.firstChild)}function o(e,t,o,n){const c=document.createElement(e);return""!=t&&("object"==typeof t?t.forEach((e=>{c.classList.add(e)})):c.classList.add(t)),""!=o&&(c.value=o,c.textContent=o),""!=n&&(c.dataset.element=n),c}function n(e,t,n="No due date"){let c=o("div","todoCard","",t),d=o("div","completeButton","","");d.addEventListener("click",(()=>{c.classList.add("complete")}));let r=o("h2","",e,""),l=o("h3","",n,"");return l.addEventListener("click",(e=>{})),c.append(d,r,l),c}document.querySelector(".todoContainer");const c=document.querySelector(".projectList"),d=document.querySelector(".todoContainer");function r(){!function(){t(c);for(let t=0;t<e.length;t++)c.append(o("div","projectCard",e[t].name,t))}()}const l=document.querySelector(".newProjectButton"),u=document.querySelector(".newProjectInput"),a=document.querySelector(".projectList");l.addEventListener("click",(o=>{var n;o.preventDefault(),""!=u.value&&(t(a),n=u.value,e.push({name:n,todos:[]}),r(),u.value="",console.log(e))})),r(),function(o){t(d);for(let t=0;t<e[0].todos.length;t++){let o=n(e[0].todos.title,t,e[0].todos.dueDate);d.append(o)}}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBQU8sSUFBSUEsRUFBVyxDQUNsQixDQUNJQyxLQUFNLGVBQ05DLE1BQU8sQ0FDSCxDQUNJQyxNQUFPLFlBQ1BDLFFBQVMsU0NKbEIsU0FBU0MsRUFBYUMsR0FDekIsS0FBT0EsRUFBUUMsWUFDWEQsRUFBUUUsWUFBWUYsRUFBUUMsV0FFcEMsQ0FFTyxTQUFTRSxFQUFlSCxFQUFTSSxFQUFXQyxFQUFhQyxHQUM1RCxNQUFNQyxFQUFXQyxTQUFTQyxjQUFjVCxHQWF4QyxNQVppQixJQUFiSSxJQUN3QixpQkFBYkEsRUFDUEEsRUFBVU0sU0FBUUMsSUFDZEosRUFBU0gsVUFBVVEsSUFBSUQsRUFBVyxJQUVuQ0osRUFBU0gsVUFBVVEsSUFBSVIsSUFFZixJQUFmQyxJQUNBRSxFQUFTTSxNQUFRUixFQUNqQkUsRUFBU0YsWUFBY0EsR0FFWCxJQUFaQyxJQUFnQkMsRUFBU08sUUFBUWQsUUFBVU0sR0FDeENDLENBQ1gsQ0FPTyxTQUFTUSxFQUFnQmxCLEVBQU9tQixFQUFJbEIsRUFBVSxlQUNqRCxJQUFJbUIsRUFBV2QsRUFBZSxNQUFPLFdBQVksR0FBSWEsR0FDakRFLEVBQVdmLEVBQWUsTUFBTyxpQkFBa0IsR0FBSSxJQUN2RGUsRUFBU0MsaUJBQWlCLFNBQVMsS0FDL0JGLEVBQVNiLFVBQVVRLElBQUksV0FBVyxJQUUxQyxJQUFJUSxFQUFZakIsRUFBZSxLQUFNLEdBQUlOLEVBQU8sSUFDNUN3QixFQUFjbEIsRUFBZSxLQUFNLEdBQUlMLEVBQVMsSUFLcEQsT0FKSXVCLEVBQVlGLGlCQUFpQixTQUFVRyxJQUFELElBRzFDTCxFQUFTTSxPQUFPTCxFQUFVRSxFQUFXQyxHQUM5QkosQ0FDWCxDQTNDc0JULFNBQVNnQixjQUFjLGtCQ0c3QyxNQUFNQyxFQUF1QmpCLFNBQVNnQixjQUFjLGdCQUM5QyxFQUFnQmhCLFNBQVNnQixjQUFjLGtCQWtCdEMsU0FBU0UsS0FoQmhCLFdBQ0kzQixFQUFhMEIsR0FDYixJQUFLLElBQUlFLEVBQUksRUFBR0EsRUFBSWpDLEVBQVNrQyxPQUFRRCxJQUNqQ0YsRUFBcUJGLE9EaUJQcEIsRUFBZSxNQUFPLGNDakJXVCxFQUFTaUMsR0FBR2hDLEtBQU1nQyxHQUV6RSxDQVlJRSxFQUNKLENDcEJBLE1BQU1DLEVBQW1CdEIsU0FBU2dCLGNBQWMscUJBQzFDTyxFQUFldkIsU0FBU2dCLGNBQWMsb0JBQ3RDUSxFQUFjeEIsU0FBU2dCLGNBQWMsZ0JBRTNDTSxFQUFpQlgsaUJBQWlCLFNBQVNHLElISXBDLElBQXVCM0IsRUdIMUIyQixFQUFFVyxpQkFDd0IsSUFBdEJGLEVBQWFsQixRQUNqQmQsRUFBYWlDLEdIQ2FyQyxFR0Fab0MsRUFBYWxCLE1IQzNCbkIsRUFBU3dDLEtBQUssQ0FDVnZDLEtBQU1BLEVBQ05DLE1BQU8sS0dGWDhCLElBQ0FLLEVBQWFsQixNQUFRLEdBQ3JCc0IsUUFBUUMsSUFBSTFDLEdBQVMsSUFHekJnQyxJREpPLFNBQXlCVyxHQUM1QnRDLEVBQWEsR0FDYixJQUFLLElBQUk0QixFQUFJLEVBQUdBLEVBQUlqQyxFQ0dSLEdESHFDRSxNQUFNZ0MsT0FBUUQsSUFBSyxDQUNoRSxJQUFJVyxFQUFjdkIsRUFBZ0JyQixFQ0UxQixHREZ1REUsTUFBTUMsTUFBTzhCLEVBQUdqQyxFQ0V2RSxHREZvR0UsTUFBTUUsU0FDbEgsRUFBY3lCLE9BQU9lLEVBQ3pCLENBQ0osQ0NEQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0TWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGFnZUxvYWRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGxldCBwcm9qZWN0cyA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6ICdUZXN0IFByb2plY3QnLFxuICAgICAgICB0b2RvczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnVGVzdCB0b2RvJyxcbiAgICAgICAgICAgICAgICBkdWVEYXRlOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9XG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdQcm9qZWN0KG5hbWUpIHtcbiAgICBwcm9qZWN0cy5wdXNoKHtcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgdG9kb3M6IFtdXG4gICAgfSlcbn0iLCJjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9Db250YWluZXInKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyRWxlbWVudChlbGVtZW50KSB7XG4gICAgd2hpbGUgKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZWxlbWVudEJ1aWxkZXIoZWxlbWVudCwgY2xhc3NMaXN0LCB0ZXh0Q29udGVudCwgZGF0YU5hbWUpIHsgIC8vZWxlbWVudCBidWlsZGVyIGNvcGllZCBhbmQgbW9kaWZpZWQgZnJvbSBwcmV2aW91cyBwcm9qZWN0LlxuICAgIGNvbnN0IHhlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbiAgICBpZiAoY2xhc3NMaXN0ICE9ICcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xhc3NMaXN0ID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjbGFzc0xpc3QuZm9yRWFjaChjbGFzc0xhYmVsID0+IHtcbiAgICAgICAgICAgICAgICB4ZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTGFiZWwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB4ZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTGlzdCk7XG4gICAgfVxuICAgIGlmICh0ZXh0Q29udGVudCAhPSAnJykge1xuICAgICAgICB4ZWxlbWVudC52YWx1ZSA9IHRleHRDb250ZW50O1xuICAgICAgICB4ZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICAgIH1cbiAgICBpZiAoZGF0YU5hbWUgIT0gJycpIHhlbGVtZW50LmRhdGFzZXQuZWxlbWVudCA9IGRhdGFOYW1lO1xuICAgIHJldHVybiB4ZWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RDYXJkQnVpbGRlcihuYW1lLCBpZCkge1xuICAgIGxldCBwcm9qZWN0Q2FyZCA9IGVsZW1lbnRCdWlsZGVyKCdkaXYnLCAncHJvamVjdENhcmQnLCBuYW1lLCBpZCk7XG4gICAgcmV0dXJuIHByb2plY3RDYXJkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9kb0NhcmRCdWlsZGVyKHRpdGxlLCBpZCwgZHVlRGF0ZSA9ICdObyBkdWUgZGF0ZScpIHsgLy9pZCB3aWxsIGJlIHRoZSBwb3NpdGlvbiBvZiB0aGUgdG9kbyBpbiB0aGUgc3RvcmFnZSBhcnJheS5cbiAgICBsZXQgdG9kb0NhcmQgPSBlbGVtZW50QnVpbGRlcignZGl2JywgJ3RvZG9DYXJkJywgJycsIGlkKTtcbiAgICBsZXQgY29tcGxldGUgPSBlbGVtZW50QnVpbGRlcignZGl2JywgJ2NvbXBsZXRlQnV0dG9uJywgJycsICcnKTtcbiAgICAgICAgY29tcGxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0b2RvQ2FyZC5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZScpO1xuICAgICAgICB9KVxuICAgIGxldCB0b2RvVGl0bGUgPSBlbGVtZW50QnVpbGRlcignaDInLCAnJywgdGl0bGUsICcnKTtcbiAgICBsZXQgdG9kb0R1ZURhdGUgPSBlbGVtZW50QnVpbGRlcignaDMnLCAnJywgZHVlRGF0ZSwgJycpO1xuICAgICAgICB0b2RvRHVlRGF0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAvL2NvZGUgaGVyZSB0byBsb2FkIGEgZGF0ZSBwaWNrZXIgd2hpY2ggY2FuIGFsbG93IHRoZSB1c2VyIHRvIGVkaXQgdGhlIGRhdGUgb24gdGhlIHRvZG8uXG4gICAgICAgIH0pXG4gICAgdG9kb0NhcmQuYXBwZW5kKGNvbXBsZXRlLCB0b2RvVGl0bGUsIHRvZG9EdWVEYXRlKTtcbiAgICByZXR1cm4gdG9kb0NhcmQ7XG59XG4iLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RNYW5hZ2VyXCI7XG5pbXBvcnQgeyBlbGVtZW50QnVpbGRlciwgcHJvamVjdENhcmRCdWlsZGVyLCB0b2RvQ2FyZEJ1aWxkZXIsIGNsZWFyRWxlbWVudCB9IGZyb20gXCIuL2RvbUNvbnRyb2xsZXJcIjtcblxuY29uc3QgcHJvamVjdExpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdExpc3QnKTtcbmNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb0NvbnRhaW5lcicpO1xuXG5mdW5jdGlvbiBwcm9qZWN0TGlzdEJ1aWxkZXIoKSB7XG4gICAgY2xlYXJFbGVtZW50KHByb2plY3RMaXN0Q29udGFpbmVyKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHByb2plY3RMaXN0Q29udGFpbmVyLmFwcGVuZChwcm9qZWN0Q2FyZEJ1aWxkZXIocHJvamVjdHNbaV0ubmFtZSwgaSkpO1xuICAgIH1cbn1cblxuLy90b2RvQ2FyZEJ1aWxkZXIodGl0bGUsIGlkLCBkdWVEYXRlID0gJ05vIGR1ZSBkYXRlJylcbmV4cG9ydCBmdW5jdGlvbiB0b2RvTGlzdEJ1aWxkZXIoYWN0aXZlUHJvamVjdEluZGV4KSB7XG4gICAgY2xlYXJFbGVtZW50KHRvZG9Db250YWluZXIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNbYWN0aXZlUHJvamVjdEluZGV4XS50b2Rvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgbmV3VG9kb0NhcmQgPSB0b2RvQ2FyZEJ1aWxkZXIocHJvamVjdHNbYWN0aXZlUHJvamVjdEluZGV4XS50b2Rvcy50aXRsZSwgaSwgcHJvamVjdHNbYWN0aXZlUHJvamVjdEluZGV4XS50b2Rvcy5kdWVEYXRlKTtcbiAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmQobmV3VG9kb0NhcmQpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhZ2VMb2FkZXIoKSB7XG4gICAgcHJvamVjdExpc3RCdWlsZGVyKCk7XG59IiwiaW1wb3J0IHsgcHJvamVjdHMsIGFkZE5ld1Byb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0TWFuYWdlclwiO1xuaW1wb3J0IHsgY2xlYXJFbGVtZW50IH0gZnJvbSBcIi4vZG9tQ29udHJvbGxlclwiO1xuaW1wb3J0IHsgcGFnZUxvYWRlciwgdG9kb0xpc3RCdWlsZGVyIH0gZnJvbSBcIi4vcGFnZUxvYWRlclwiO1xuXG5jb25zdCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld1Byb2plY3RCdXR0b24nKTtcbmNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdQcm9qZWN0SW5wdXQnKTtcbmNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RMaXN0Jyk7XG5cbm5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHsgLy93aWxsIG5lZWQgdG8gcmV3b3JrIHRoaXMgdG8gYWRkIHRvIHN0b3JhZ2UgYXJyYXkgcmF0aGVyIHRoYW4gZGlyZWN0bHkgdG8gRE9NXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChwcm9qZWN0SW5wdXQudmFsdWUgPT0gJycgfHwgbnVsbCkgcmV0dXJuO1xuICAgIGNsZWFyRWxlbWVudChwcm9qZWN0TGlzdCk7XG4gICAgYWRkTmV3UHJvamVjdChwcm9qZWN0SW5wdXQudmFsdWUpO1xuICAgIHBhZ2VMb2FkZXIoKTtcbiAgICBwcm9qZWN0SW5wdXQudmFsdWUgPSAnJztcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XG59KVxuXG5wYWdlTG9hZGVyKCk7XG50b2RvTGlzdEJ1aWxkZXIoMCk7Il0sIm5hbWVzIjpbInByb2plY3RzIiwibmFtZSIsInRvZG9zIiwidGl0bGUiLCJkdWVEYXRlIiwiY2xlYXJFbGVtZW50IiwiZWxlbWVudCIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImVsZW1lbnRCdWlsZGVyIiwiY2xhc3NMaXN0IiwidGV4dENvbnRlbnQiLCJkYXRhTmFtZSIsInhlbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZm9yRWFjaCIsImNsYXNzTGFiZWwiLCJhZGQiLCJ2YWx1ZSIsImRhdGFzZXQiLCJ0b2RvQ2FyZEJ1aWxkZXIiLCJpZCIsInRvZG9DYXJkIiwiY29tcGxldGUiLCJhZGRFdmVudExpc3RlbmVyIiwidG9kb1RpdGxlIiwidG9kb0R1ZURhdGUiLCJlIiwiYXBwZW5kIiwicXVlcnlTZWxlY3RvciIsInByb2plY3RMaXN0Q29udGFpbmVyIiwicGFnZUxvYWRlciIsImkiLCJsZW5ndGgiLCJwcm9qZWN0TGlzdEJ1aWxkZXIiLCJuZXdQcm9qZWN0QnV0dG9uIiwicHJvamVjdElucHV0IiwicHJvamVjdExpc3QiLCJwcmV2ZW50RGVmYXVsdCIsInB1c2giLCJjb25zb2xlIiwibG9nIiwiYWN0aXZlUHJvamVjdEluZGV4IiwibmV3VG9kb0NhcmQiLCJ0b2RvTGlzdEJ1aWxkZXIiXSwic291cmNlUm9vdCI6IiJ9