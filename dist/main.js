(()=>{"use strict";let e=[];function t(e){window.localStorage.removeItem("projects"),window.localStorage.setItem("projects",JSON.stringify(e))}class o{constructor(e,t,o=[]){this.name=e,this.projectIndex=t,this.todos=o}static addNewTodo(o,d,a=""){const n={title:o,projectIndex:d,completed:!1,dueDate:a};e[d].todos.push(n),t(e)}static projectDeleter(o){e.splice(o,1),t(e)}static addNewProject(d,a){e.push(new o(d,a)),t(e)}markTodoCompleteToggle(o){this.todos[o].completed=!this.todos[o].completed,t(e)}todoDateEditor(o,d){this.todos[o].dueDate=d,t(e)}todoDeleter(o){this.todos.splice(o,1),t(e)}}let d=0;const a=document.querySelector(".projectList"),n=document.querySelector(".newProjectButton"),l=document.querySelector(".newProjectInput"),c=document.querySelector(".projectList"),r=document.querySelector(".todoList"),s=document.querySelector(".newTodoButton"),i=document.querySelector(".newTodoInput"),u=document.querySelector(".newTodoDate"),p=document.querySelector(".deleteComplete");function m(e){for(;e.firstChild;)e.removeChild(e.firstChild)}function v(e,t,o,d){const a=document.createElement(e);return""!=t&&("object"==typeof t?t.forEach((e=>{a.classList.add(e)})):a.classList.add(t)),""!=o&&(a.value=o,a.textContent=o),""!=d&&(a.dataset.element=d),a}function h(e){let t=v("div","projectCard",e,"");return t.addEventListener("click",(e=>{var t;t=e.target.dataset.projectID,d=t,f(),w(d)})),t}function f(){m(a);let t=[];for(let o=0;o<e.length;o++){let d=h(e[o].name);d.dataset.projectID=o,t.push(d)}t[d].classList.add("activeProject"),t.forEach((e=>{c.append(e)}))}function w(t){m(r);for(let o=0;o<e[t].todos.length;o++){let d=g(e[t].todos[o].title,e[t].todos[o].completed,e[t].todos[o].dueDate);d.dataset.projectID=t,d.dataset.todoID=o,r.append(d)}}function g(t,o,a){let n=v("div","todoCard","",""),l=v("div",["completeButton","material-symbols-outlined"],"","");l.addEventListener("click",(t=>{const o=t.target.parentNode.dataset.todoID;n.classList.toggle("complete"),l.classList.toggle("selected"),e[d].markTodoCompleteToggle(o)})),1==o&&(n.classList.add("complete"),l.classList.add("selected"));let c=v("h2","",t,""),r=v("div","dateHolder","",""),s=v("h3","","","");s.textContent=""==a?"No due date":`Due ${a}`,r.append(s);let i=v("input","","","");return i.setAttribute("type","date"),i.value=""==a?"":a,i.addEventListener("blur",(t=>{const o=t.target.parentNode.parentNode.dataset.projectID,d=t.target.parentNode.parentNode.dataset.todoID;let a=i.value;e[o].todoDateEditor(d,a),""!=a&&(s.textContent="",s.textContent=`Due ${a}`),r.removeChild(r.firstChild),r.append(s)})),s.addEventListener("click",(()=>{r.removeChild(r.firstChild),r.append(i),i.focus()})),n.append(l,c,r),n}function j(){!function(){let t=window.localStorage.getItem("projects"),d=JSON.parse(t);console.log(d);let a=[];for(let e=0;e<d.length;e++)a.push(new o(d[e].name,e,d[e].todos));e=a}(),f(),w(d)}n.addEventListener("click",(e=>{e.preventDefault(),""!=l.value&&(m(c),o.addNewProject(l.value),w(d),l.value="",f())})),s.addEventListener("click",(e=>{e.preventDefault(),""!=i.value&&(o.addNewTodo(i.value,d,u.value),j(),i.value="",u.value="")})),p.addEventListener("click",(t=>{t.preventDefault();for(let t=e[d].todos.length-1;t>=0;t--)1==e[d].todos[t].completed&&e[d].todoDeleter(t),j()})),null==window.localStorage.projects&&(o.addNewProject("test project",0),o.addNewTodo("Test todo",0),o.addNewTodo("another test todo",0),o.addNewProject("second test project",1),o.addNewTodo("second test todo",1),o.addNewTodo("Yet another thing to do",1)),j()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y0FBY1csRUFBYW9CLE9BQ25DVSxFQUFnQm5DLEdBQ2hCSyxFQUFhb0IsTUFBUSxHQUNyQlMsSUFBb0IsSUFFeEIxQixFQUFjcUIsaUJBQWlCLFNBQVNDLElBQ3BDQSxFQUFFa0MsaUJBQ3dCLElBQXRCdkQsRUFBYWdCLFFBQ2pCN0MsRUFBUU0sV0FBV3VCLEVBQWFnQixNQUFPekIsRUFBb0JVLEVBQVllLE9BQ3ZFOEIsSUFDQTlDLEVBQWFnQixNQUFRLEdBQ3JCZixFQUFZZSxNQUFRLEdBQUUsSUFFMUJkLEVBQXdCa0IsaUJBQWlCLFNBQVNDLElBQzlDQSxFQUFFa0MsaUJBQ0YsSUFBSyxJQUFJM0IsRUFBSWpFLEVBQVM0QixHQUFvQmhCLE1BQU1zRCxPQUFTLEVBQUdELEdBQUssRUFBR0EsSUFDVCxHQUFuRGpFLEVBQVM0QixHQUFvQmhCLE1BQU1xRCxHQUFHL0MsV0FDdENsQixFQUFTNEIsR0FBb0JELFlBQVlzQyxHQUU3Q2tCLEdBQ0osSUVsQ2dDLE1BQWhDakYsT0FBT0MsYUFBYUgsV0FDcEJRLEVBQVFjLGNBQWMsZUFBZ0IsR0FDdENkLEVBQVFNLFdBQVcsWUFBYSxHQUNoQ04sRUFBUU0sV0FBVyxvQkFBcUIsR0FDeENOLEVBQVFjLGNBQWMsc0JBQXVCLEdBQzdDZCxFQUFRTSxXQUFXLG1CQUFvQixHQUN2Q04sRUFBUU0sV0FBVywwQkFBMkIsSUFRbERxRSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RTdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0TWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGFnZUxvYWRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RNYW5hZ2VyXCI7XG5cbmV4cG9ydCBsZXQgcHJvamVjdHMgPSBbXTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBvcHVsYXRlQnJvd3NlclN0b3JhZ2UocHJvamVjdHMpIHtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Byb2plY3RzJyk7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCcm93c2VyU3RvcmFnZSgpIHtcbiAgICBsZXQgc3RyaW5nUmV0cmlldmVkU3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKTtcbiAgICBsZXQgcmV0cmlldmVkU3RvcmFnZSA9IEpTT04ucGFyc2Uoc3RyaW5nUmV0cmlldmVkU3RvcmFnZSk7XG4gICAgY29uc29sZS5sb2cocmV0cmlldmVkU3RvcmFnZSk7XG4gICAgbGV0IHJldHJpZXZlZFN0b3JhZ2VXaXRoUHJvdG90eXBlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmV0cmlldmVkU3RvcmFnZS5sZW5ndGg7IGkrKykge1xuICAgICAgICByZXRyaWV2ZWRTdG9yYWdlV2l0aFByb3RvdHlwZXMucHVzaChuZXcgUHJvamVjdChyZXRyaWV2ZWRTdG9yYWdlW2ldLm5hbWUsIGksIHJldHJpZXZlZFN0b3JhZ2VbaV0udG9kb3MpKTsgXG4gICAgfVxuICAgIHByb2plY3RzID0gcmV0cmlldmVkU3RvcmFnZVdpdGhQcm90b3R5cGVzO1xufVxuXG4vL3RoZXJlIGN1cnJlbnRseSBleGlzdHMgYSBidWcgd2l0aCB0aGUgZ2V0IGJyb3dlc2VyIHN0b3JhZ2UgZnVuY3Rpb24uIFRoZSBwcm90b3R5cGVzIG9uIHRoZSBvYmplY3RzIGluIHRoZSBwcm9qZWN0c1xuLy9hcnJheSwgbG9hZGVkIGluIGZyb20gbG9jYWwgc3RvcmFnZSwgY29tZXMgd2l0aG91dCB0aGUgcHJvdG90eXBlcy5cbi8vSSBtaWdodCBuZWVkIHRvIGdvIHRocm91Z2ggZWFjaCB0b2RvIGFuZCByZWNyZWF0ZSBpdCB1c2luZyB0aGUgY29uc3RydWN0b3IgaW4gb3JkZXIgdG8gZ2V0IGl0IHdvcmtpbmcgYWdpYW4uIiwiaW1wb3J0IHsgcHJvamVjdHMsIHBvcHVsYXRlQnJvd3NlclN0b3JhZ2UgfSBmcm9tIFwiLi9wcm9qZWN0U3RvcmFnZVwiO1xuXG5leHBvcnQgY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgcHJvamVjdEluZGV4LCB0b2RvcyA9IFtdKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMucHJvamVjdEluZGV4ID0gcHJvamVjdEluZGV4O1xuICAgICAgICB0aGlzLnRvZG9zID0gdG9kb3M7XG4gICAgfVxuXG4gICAgc3RhdGljIGFkZE5ld1RvZG8odGl0bGUsIHByb2plY3RJbmRleCwgZHVlRGF0ZSA9ICcnKSB7XG4gICAgICAgIGNvbnN0IHRvZG8gPSB7XG4gICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICBwcm9qZWN0SW5kZXg6IHByb2plY3RJbmRleCxcbiAgICAgICAgICAgIC8vIHRvZG9JbmRleDogdG9kb0luZGV4LFxuICAgICAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGR1ZURhdGU6IGR1ZURhdGVcbiAgICAgICAgfVxuICAgICAgICBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRvZG9zLnB1c2godG9kbyk7XG4gICAgICAgIHBvcHVsYXRlQnJvd3NlclN0b3JhZ2UocHJvamVjdHMpO1xuICAgIH1cblxuICAgIHN0YXRpYyBwcm9qZWN0RGVsZXRlcihwcm9qZWN0SW5kZXgpIHtcbiAgICAgICAgcHJvamVjdHMuc3BsaWNlKHByb2plY3RJbmRleCwgMSk7XG4gICAgICAgIHBvcHVsYXRlQnJvd3NlclN0b3JhZ2UocHJvamVjdHMpO1xuICAgIH1cblxuICAgIHN0YXRpYyBhZGROZXdQcm9qZWN0KG5hbWUsIHByb2plY3RJbmRleCkge1xuICAgICAgICBwcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KG5hbWUsIHByb2plY3RJbmRleCkpO1xuICAgICAgICBwb3B1bGF0ZUJyb3dzZXJTdG9yYWdlKHByb2plY3RzKTtcbiAgICB9XG5cbiAgICBtYXJrVG9kb0NvbXBsZXRlVG9nZ2xlKHRvZG9JbmRleCkge1xuICAgICAgICB0aGlzLnRvZG9zW3RvZG9JbmRleF0uY29tcGxldGVkID0gIXRoaXMudG9kb3NbdG9kb0luZGV4XS5jb21wbGV0ZWQ7XG4gICAgICAgIHBvcHVsYXRlQnJvd3NlclN0b3JhZ2UocHJvamVjdHMpO1xuICAgIH1cblxuICAgIHRvZG9EYXRlRWRpdG9yKHRvZG9JbmRleCwgbmV3RGF0ZSkge1xuICAgICAgICB0aGlzLnRvZG9zW3RvZG9JbmRleF0uZHVlRGF0ZSA9IG5ld0RhdGU7XG4gICAgICAgIHBvcHVsYXRlQnJvd3NlclN0b3JhZ2UocHJvamVjdHMpO1xuICAgIH1cblxuICAgIHRvZG9EZWxldGVyKHRvZG9JbmRleCkge1xuICAgICAgICB0aGlzLnRvZG9zLnNwbGljZSh0b2RvSW5kZXgsIDEpO1xuICAgICAgICBwb3B1bGF0ZUJyb3dzZXJTdG9yYWdlKHByb2plY3RzKTtcbiAgICB9XG59XG5cbi8vIGZ1bmN0aW9uIHByb2plY3RCdWlsZGVyKG5hbWUsIHByb2plY3RJbmRleCkgeyAvL2ZhY3RvcnkgZnVuY3Rpb24gdG8gYnVpbGQgbmV3IHByb2plY3Qgb2JqZWN0LlxuLy8gICAgIGxldCB0b2RvcyA9IFtdO1xuLy8gICAgIGZ1bmN0aW9uIHRvZG9EYXRlRWRpdG9yKHRvZG9JbmRleCwgbmV3RGF0ZSkge1xuLy8gICAgICAgICB0aGlzLnRvZG9zW3RvZG9JbmRleF0uZHVlRGF0ZSA9IG5ld0RhdGU7XG4vLyAgICAgfVxuLy8gICAgIGZ1bmN0aW9uIHRvZG9EZWxldGVyKHRvZG9JRCl7XG4vLyAgICAgICAgIHRoaXMudG9kb3Muc3BsaWNlKHRvZG9JRCwgMSk7XG4vLyAgICAgfVxuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICAgIG5hbWU6IG5hbWUsXG4vLyAgICAgICAgIHByb2plY3RJbmRleDogcHJvamVjdEluZGV4LFxuLy8gICAgICAgICB0b2RvczogdG9kb3MsXG4vLyAgICAgICAgIHRvZG9EYXRlRWRpdG9yOiB0b2RvRGF0ZUVkaXRvcixcbi8vICAgICAgICAgdG9kb0RlbGV0ZXI6IHRvZG9EZWxldGVyXG4vLyAgICAgfVxuLy8gfVxuLy8gZnVuY3Rpb24gdG9kb0J1aWxkZXIodGl0bGUsIHByb2plY3RJbmRleCwgdG9kb0luZGV4LCBkdWVEYXRlID0gJ05vIGR1ZSBkYXRlLicpIHsgLy9wcm9qZWN0SW5kZXggcmVmZXJzIHRvIHRoZSBwb3NpdGlvbiBvZiB0aGUgcGFyZW50IHByb2plY3QgaW4gdGhlIGFycmF5IG9mIHByb2plY3RzLlxuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICAgIHRpdGxlOiB0aXRsZSxcbi8vICAgICAgICAgcHJvamVjdEluZGV4OiBwcm9qZWN0SW5kZXgsXG4vLyAgICAgICAgIHRvZG9JbmRleDogdG9kb0luZGV4LFxuLy8gICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuLy8gICAgICAgICBkdWVEYXRlOiBkdWVEYXRlXG4vLyAgICAgfVxuLy8gfVxuLy8gZXhwb3J0IGZ1bmN0aW9uIHByb2plY3REZWxldGVyKHByb2plY3RJbmRleCkge1xuLy8gICAgIFByb2plY3QucHJvamVjdHMuc3BsaWNlKHByb2plY3RJbmRleCwgMSk7XG4vLyB9XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBhZGROZXdQcm9qZWN0KG5hbWUsIHByb2plY3RJbmRleCkge1xuLy8gICAgIHByb2plY3RzLnB1c2gobmV3IFByb2plY3QobmFtZSwgcHJvamVjdEluZGV4KSk7XG4vLyB9XG4vLyBleHBvcnQgZnVuY3Rpb24gYWRkTmV3VG9kbyh0aXRsZSwgcHJvamVjdEluZGV4LCB0b2RvSW5kZXgsIGR1ZURhdGUgPSAnTm8gZHVlIGRhdGUuJykge1xuLy8gICAgIFByb2plY3QucHJvamVjdHNbcHJvamVjdEluZGV4XS50b2Rvcy5wdXNoKHRvZG9CdWlsZGVyKHRpdGxlLCBwcm9qZWN0SW5kZXgsIHRvZG9JbmRleCwgZHVlRGF0ZSkpO1xuLy8gfSIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0TWFuYWdlclwiO1xuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0U3RvcmFnZVwiO1xuaW1wb3J0IHsgcGFnZUxvYWRlciB9IGZyb20gXCIuL3BhZ2VMb2FkZXJcIjtcblxuZXhwb3J0IGxldCBhY3RpdmVQcm9qZWN0SW5kZXggPSAwO1xuXG5jb25zdCBwcm9qZWN0TGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0TGlzdCcpO1xuY29uc3QgbmV3UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdQcm9qZWN0QnV0dG9uJyk7XG4gICAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld1Byb2plY3RJbnB1dCcpO1xuY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdExpc3QnKTtcbmNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb0xpc3QnKTtcbmNvbnN0IG5ld1RvZG9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3VG9kb0J1dHRvbicpO1xuICAgIGNvbnN0IG5ld1RvZG9JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdUb2RvSW5wdXQnKTtcbiAgICBjb25zdCBuZXdUb2RvRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdUb2RvRGF0ZScpO1xuY29uc3QgZGVsZXRlQWxsQ29tcGxldGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlQ29tcGxldGUnKTtcblxubmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4geyAvL3dpbGwgbmVlZCB0byByZXdvcmsgdGhpcyB0byBhZGQgdG8gc3RvcmFnZSBhcnJheSByYXRoZXIgdGhhbiBkaXJlY3RseSB0byBET01cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHByb2plY3RJbnB1dC52YWx1ZSA9PSAnJykgcmV0dXJuO1xuICAgIGNsZWFyRWxlbWVudChwcm9qZWN0TGlzdCk7XG4gICAgUHJvamVjdC5hZGROZXdQcm9qZWN0KHByb2plY3RJbnB1dC52YWx1ZSk7XG4gICAgdG9kb0xpc3RCdWlsZGVyKGFjdGl2ZVByb2plY3RJbmRleCk7XG4gICAgcHJvamVjdElucHV0LnZhbHVlID0gJyc7XG4gICAgcHJvamVjdExpc3RCdWlsZGVyKCk7XG59KVxubmV3VG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAobmV3VG9kb0lucHV0LnZhbHVlID09ICcnKSByZXR1cm47XG4gICAgUHJvamVjdC5hZGROZXdUb2RvKG5ld1RvZG9JbnB1dC52YWx1ZSwgYWN0aXZlUHJvamVjdEluZGV4LCBuZXdUb2RvRGF0ZS52YWx1ZSk7XG4gICAgcGFnZUxvYWRlcigpO1xuICAgIG5ld1RvZG9JbnB1dC52YWx1ZSA9ICcnO1xuICAgIG5ld1RvZG9EYXRlLnZhbHVlID0gJyc7XG59KVxuZGVsZXRlQWxsQ29tcGxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZm9yIChsZXQgaSA9IHByb2plY3RzW2FjdGl2ZVByb2plY3RJbmRleF0udG9kb3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgaWYgKHByb2plY3RzW2FjdGl2ZVByb2plY3RJbmRleF0udG9kb3NbaV0uY29tcGxldGVkID09IHRydWUpIHtcbiAgICAgICAgICAgIHByb2plY3RzW2FjdGl2ZVByb2plY3RJbmRleF0udG9kb0RlbGV0ZXIoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcGFnZUxvYWRlcigpO1xuICAgIH1cbn0pXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyRWxlbWVudChlbGVtZW50KSB7XG4gICAgd2hpbGUgKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZWxlbWVudEJ1aWxkZXIoZWxlbWVudCwgY2xhc3NMaXN0LCB0ZXh0Q29udGVudCwgZGF0YU5hbWUpIHsgIC8vZWxlbWVudCBidWlsZGVyIGNvcGllZCBhbmQgbW9kaWZpZWQgZnJvbSBwcmV2aW91cyBwcm9qZWN0LlxuICAgIGNvbnN0IHhlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbiAgICBpZiAoY2xhc3NMaXN0ICE9ICcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xhc3NMaXN0ID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjbGFzc0xpc3QuZm9yRWFjaChjbGFzc0xhYmVsID0+IHtcbiAgICAgICAgICAgICAgICB4ZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTGFiZWwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB4ZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTGlzdCk7XG4gICAgfVxuICAgIGlmICh0ZXh0Q29udGVudCAhPSAnJykge1xuICAgICAgICB4ZWxlbWVudC52YWx1ZSA9IHRleHRDb250ZW50O1xuICAgICAgICB4ZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICAgIH1cbiAgICBpZiAoZGF0YU5hbWUgIT0gJycpIHhlbGVtZW50LmRhdGFzZXQuZWxlbWVudCA9IGRhdGFOYW1lO1xuICAgIHJldHVybiB4ZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gcHJvamVjdENhcmRCdWlsZGVyKG5hbWUpIHtcbiAgICBsZXQgcHJvamVjdENhcmQgPSBlbGVtZW50QnVpbGRlcignZGl2JywgJ3Byb2plY3RDYXJkJywgbmFtZSwgJycpO1xuICAgIHByb2plY3RDYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGFjdGl2ZVByb2plY3RTd2l0Y2hlcihlLnRhcmdldC5kYXRhc2V0LnByb2plY3RJRCk7XG4gICAgfSlcbiAgICByZXR1cm4gcHJvamVjdENhcmQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0TGlzdEJ1aWxkZXIoKSB7XG4gICAgY2xlYXJFbGVtZW50KHByb2plY3RMaXN0Q29udGFpbmVyKTtcbiAgICBsZXQgcHJvamVjdENhcmRzID0gW11cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBuZXdQcm9qZWN0Q2FyZCA9IHByb2plY3RDYXJkQnVpbGRlcihwcm9qZWN0c1tpXS5uYW1lKTtcbiAgICAgICAgbmV3UHJvamVjdENhcmQuZGF0YXNldC5wcm9qZWN0SUQgPSBpO1xuICAgICAgICBwcm9qZWN0Q2FyZHMucHVzaChuZXdQcm9qZWN0Q2FyZCk7XG4gICAgfVxuICAgIHByb2plY3RDYXJkc1thY3RpdmVQcm9qZWN0SW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZVByb2plY3QnKTtcbiAgICBwcm9qZWN0Q2FyZHMuZm9yRWFjaChwcm9qZWN0Q2FyZCA9PiB7XG4gICAgICAgIHByb2plY3RMaXN0LmFwcGVuZChwcm9qZWN0Q2FyZCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGFjdGl2ZVByb2plY3RTd2l0Y2hlcihuZXdQcm9qZWN0SW5kZXgpIHtcbiAgICBhY3RpdmVQcm9qZWN0SW5kZXggPSBuZXdQcm9qZWN0SW5kZXg7XG4gICAgcHJvamVjdExpc3RCdWlsZGVyKCk7XG4gICAgdG9kb0xpc3RCdWlsZGVyKGFjdGl2ZVByb2plY3RJbmRleCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2RvTGlzdEJ1aWxkZXIoYWN0aXZlUHJvamVjdEluZGV4KSB7XG4gICAgY2xlYXJFbGVtZW50KHRvZG9Db250YWluZXIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNbYWN0aXZlUHJvamVjdEluZGV4XS50b2Rvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgbmV3VG9kb0NhcmQgPSB0b2RvQ2FyZEJ1aWxkZXIocHJvamVjdHNbYWN0aXZlUHJvamVjdEluZGV4XS50b2Rvc1tpXS50aXRsZSwgcHJvamVjdHNbYWN0aXZlUHJvamVjdEluZGV4XS50b2Rvc1tpXS5jb21wbGV0ZWQsIHByb2plY3RzW2FjdGl2ZVByb2plY3RJbmRleF0udG9kb3NbaV0uZHVlRGF0ZSk7XG4gICAgICAgIG5ld1RvZG9DYXJkLmRhdGFzZXQucHJvamVjdElEID0gYWN0aXZlUHJvamVjdEluZGV4O1xuICAgICAgICBuZXdUb2RvQ2FyZC5kYXRhc2V0LnRvZG9JRCA9IGk7XG4gICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kKG5ld1RvZG9DYXJkKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2RvQ2FyZEJ1aWxkZXIodGl0bGUsIGNvbXBsZXRlZCwgZHVlRGF0ZSkgeyBcbiAgICBsZXQgdG9kb0NhcmQgPSBlbGVtZW50QnVpbGRlcignZGl2JywgJ3RvZG9DYXJkJywgJycsICcnKTtcbiAgICBsZXQgY29tcGxldGUgPSBlbGVtZW50QnVpbGRlcignZGl2JywgWydjb21wbGV0ZUJ1dHRvbicsICdtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkJ10sICcnLCAnJyk7XG4gICAgICAgIGNvbXBsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9JRCA9IGUudGFyZ2V0LnBhcmVudE5vZGUuZGF0YXNldC50b2RvSUQ7XG4gICAgICAgICAgICB0b2RvQ2FyZC5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZScpO1xuICAgICAgICAgICAgY29tcGxldGUuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgIC8vIGlmIChjb21wbGV0ZS50ZXh0Q29udGVudCA9PSAnJykgY29tcGxldGUudGV4dENvbnRlbnQgPSAnJzsgZWxzZSBjb21wbGV0ZS50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgcHJvamVjdHNbYWN0aXZlUHJvamVjdEluZGV4XS5tYXJrVG9kb0NvbXBsZXRlVG9nZ2xlKHRvZG9JRCk7XG4gICAgICAgIH0pXG4gICAgICAgIGlmIChjb21wbGV0ZWQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdG9kb0NhcmQuY2xhc3NMaXN0LmFkZCgnY29tcGxldGUnKTtcbiAgICAgICAgICAgIGNvbXBsZXRlLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgIH1cbiAgICBsZXQgdG9kb1RpdGxlID0gZWxlbWVudEJ1aWxkZXIoJ2gyJywgJycsIHRpdGxlLCAnJyk7XG4gICAgbGV0IHRvZG9EYXRlSG9sZGVyID0gZWxlbWVudEJ1aWxkZXIoJ2RpdicsICdkYXRlSG9sZGVyJywgJycsICcnKTtcbiAgICBsZXQgdG9kb0R1ZURhdGUgPSBlbGVtZW50QnVpbGRlcignaDMnLCAnJywgJycsICcnKTtcbiAgICAgICAgaWYgKGR1ZURhdGUgPT0gJycpIHRvZG9EdWVEYXRlLnRleHRDb250ZW50ID0gJ05vIGR1ZSBkYXRlJzsgZWxzZSB0b2RvRHVlRGF0ZS50ZXh0Q29udGVudCA9IGBEdWUgJHtkdWVEYXRlfWA7XG4gICAgdG9kb0RhdGVIb2xkZXIuYXBwZW5kKHRvZG9EdWVEYXRlKTtcbiAgICBsZXQgdG9kb0R1ZURhdGVQaWNrZXIgPSBlbGVtZW50QnVpbGRlcignaW5wdXQnLCAnJywgJycsICcnKTtcbiAgICAgICAgdG9kb0R1ZURhdGVQaWNrZXIuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gICAgICAgIGlmIChkdWVEYXRlID09ICcnKSB0b2RvRHVlRGF0ZVBpY2tlci52YWx1ZSA9ICcnOyBlbHNlIHRvZG9EdWVEYXRlUGlja2VyLnZhbHVlID0gZHVlRGF0ZTtcbiAgICAgICAgICAgIHRvZG9EdWVEYXRlUGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RJRCA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5kYXRhc2V0LnByb2plY3RJRDtcbiAgICAgICAgICAgICAgICBjb25zdCB0b2RvSUQgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZGF0YXNldC50b2RvSUQ7XG4gICAgICAgICAgICAgICAgbGV0IG5ld0R1ZURhdGUgPSB0b2RvRHVlRGF0ZVBpY2tlci52YWx1ZTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0c1twcm9qZWN0SURdLnRvZG9EYXRlRWRpdG9yKHRvZG9JRCwgbmV3RHVlRGF0ZSk7XG4gICAgICAgICAgICAgICAgaWYgKG5ld0R1ZURhdGUgIT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0R1ZURhdGUudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgdG9kb0R1ZURhdGUudGV4dENvbnRlbnQgPSBgRHVlICR7bmV3RHVlRGF0ZX1gXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB0b2RvRGF0ZUhvbGRlci5yZW1vdmVDaGlsZCh0b2RvRGF0ZUhvbGRlci5maXJzdENoaWxkKTtcbiAgICAgICAgICAgICAgICB0b2RvRGF0ZUhvbGRlci5hcHBlbmQodG9kb0R1ZURhdGUpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgdG9kb0R1ZURhdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0b2RvRGF0ZUhvbGRlci5yZW1vdmVDaGlsZCh0b2RvRGF0ZUhvbGRlci5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIHRvZG9EYXRlSG9sZGVyLmFwcGVuZCh0b2RvRHVlRGF0ZVBpY2tlcik7XG4gICAgICAgICAgICB0b2RvRHVlRGF0ZVBpY2tlci5mb2N1cygpO1xuICAgICAgICB9KVxuICAgICAgICBcblxuICAgIHRvZG9DYXJkLmFwcGVuZChjb21wbGV0ZSwgdG9kb1RpdGxlLCB0b2RvRGF0ZUhvbGRlcik7XG4gICAgcmV0dXJuIHRvZG9DYXJkO1xufVxuIiwiXG5pbXBvcnQgeyB0b2RvTGlzdEJ1aWxkZXIsIHByb2plY3RMaXN0QnVpbGRlciwgYWN0aXZlUHJvamVjdEluZGV4IH0gZnJvbSBcIi4vZG9tQ29udHJvbGxlclwiO1xuaW1wb3J0IHsgZ2V0QnJvd3NlclN0b3JhZ2UgfSBmcm9tIFwiLi9wcm9qZWN0U3RvcmFnZVwiO1xuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0U3RvcmFnZVwiO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RNYW5hZ2VyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwYWdlTG9hZGVyKCkge1xuICAgIGdldEJyb3dzZXJTdG9yYWdlKCk7XG4gICAgcHJvamVjdExpc3RCdWlsZGVyKCk7XG4gICAgdG9kb0xpc3RCdWlsZGVyKGFjdGl2ZVByb2plY3RJbmRleCk7XG59IiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RNYW5hZ2VyXCI7XG5pbXBvcnQgeyBwYWdlTG9hZGVyIH0gZnJvbSBcIi4vcGFnZUxvYWRlclwiO1xuaW1wb3J0IHsgZ2V0QnJvd3NlclN0b3JhZ2UgfSBmcm9tIFwiLi9wcm9qZWN0U3RvcmFnZVwiO1xuXG5cbi8vIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncHJvamVjdHMnKTtcbmlmICh3aW5kb3cubG9jYWxTdG9yYWdlLnByb2plY3RzID09IG51bGwpIHtcbiAgICBQcm9qZWN0LmFkZE5ld1Byb2plY3QoJ3Rlc3QgcHJvamVjdCcsIDApO1xuICAgIFByb2plY3QuYWRkTmV3VG9kbygnVGVzdCB0b2RvJywgMCk7XG4gICAgUHJvamVjdC5hZGROZXdUb2RvKCdhbm90aGVyIHRlc3QgdG9kbycsIDApO1xuICAgIFByb2plY3QuYWRkTmV3UHJvamVjdCgnc2Vjb25kIHRlc3QgcHJvamVjdCcsIDEpO1xuICAgIFByb2plY3QuYWRkTmV3VG9kbygnc2Vjb25kIHRlc3QgdG9kbycsIDEpO1xuICAgIFByb2plY3QuYWRkTmV3VG9kbygnWWV0IGFub3RoZXIgdGhpbmcgdG8gZG8nLCAxKTtcbn1cblxuLy8gd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwcm9qZWN0cycpO1xuLy8gY29uc29sZS5sb2cod2luZG93LmxvY2FsU3RvcmFnZS5wcm9qZWN0cyk7XG5cblxuXG5wYWdlTG9hZGVyKCk7XG4iXSwibmFtZXMiOlsicHJvamVjdHMiLCJwb3B1bGF0ZUJyb3dzZXJTdG9yYWdlIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiUHJvamVjdCIsImNvbnN0cnVjdG9yIiwibmFtZSIsInByb2plY3RJbmRleCIsInRvZG9zIiwidGhpcyIsImFkZE5ld1RvZG8iLCJ0aXRsZSIsImR1ZURhdGUiLCJ0b2RvIiwiY29tcGxldGVkIiwicHVzaCIsInByb2plY3REZWxldGVyIiwic3BsaWNlIiwiYWRkTmV3UHJvamVjdCIsIm1hcmtUb2RvQ29tcGxldGVUb2dnbGUiLCJ0b2RvSW5kZXgiLCJ0b2RvRGF0ZUVkaXRvciIsIm5ld0RhdGUiLCJ0b2RvRGVsZXRlciIsImFjdGl2ZVByb2plY3RJbmRleCIsInByb2plY3RMaXN0Q29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibmV3UHJvamVjdEJ1dHRvbiIsInByb2plY3RJbnB1dCIsInByb2plY3RMaXN0IiwidG9kb0NvbnRhaW5lciIsIm5ld1RvZG9CdXR0b24iLCJuZXdUb2RvSW5wdXQiLCJuZXdUb2RvRGF0ZSIsImRlbGV0ZUFsbENvbXBsZXRlQnV0dG9uIiwiY2xlYXJFbGVtZW50IiwiZWxlbWVudCIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImVsZW1lbnRCdWlsZGVyIiwiY2xhc3NMaXN0IiwidGV4dENvbnRlbnQiLCJkYXRhTmFtZSIsInhlbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImZvckVhY2giLCJjbGFzc0xhYmVsIiwiYWRkIiwidmFsdWUiLCJkYXRhc2V0IiwicHJvamVjdENhcmRCdWlsZGVyIiwicHJvamVjdENhcmQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsIm5ld1Byb2plY3RJbmRleCIsInRhcmdldCIsInByb2plY3RJRCIsInByb2plY3RMaXN0QnVpbGRlciIsInRvZG9MaXN0QnVpbGRlciIsInByb2plY3RDYXJkcyIsImkiLCJsZW5ndGgiLCJuZXdQcm9qZWN0Q2FyZCIsImFwcGVuZCIsIm5ld1RvZG9DYXJkIiwidG9kb0NhcmRCdWlsZGVyIiwidG9kb0lEIiwidG9kb0NhcmQiLCJjb21wbGV0ZSIsInBhcmVudE5vZGUiLCJ0b2dnbGUiLCJ0b2RvVGl0bGUiLCJ0b2RvRGF0ZUhvbGRlciIsInRvZG9EdWVEYXRlIiwidG9kb0R1ZURhdGVQaWNrZXIiLCJzZXRBdHRyaWJ1dGUiLCJuZXdEdWVEYXRlIiwiZm9jdXMiLCJwYWdlTG9hZGVyIiwic3RyaW5nUmV0cmlldmVkU3RvcmFnZSIsImdldEl0ZW0iLCJyZXRyaWV2ZWRTdG9yYWdlIiwicGFyc2UiLCJjb25zb2xlIiwibG9nIiwicmV0cmlldmVkU3RvcmFnZVdpdGhQcm90b3R5cGVzIiwiZ2V0QnJvd3NlclN0b3JhZ2UiLCJwcmV2ZW50RGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=