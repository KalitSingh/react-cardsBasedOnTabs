# Projects Entity and Tab Entity 
1. Entities
- Tabs
- Projects

2. Attributes
Tabs:
  - tabId
  - displayText

Projects:
  - projectId
  - title
  - description
  - imageURL
  - category

3. Relationship
- Parent: Tab
- Child: Project
- Type: One-to-Many
- Key linking: tabId === category

4. UI State 
- tabsList (static)
- projectsList (data)
- activeTab (user selection)
- filteredList (derived)

5. Logic
- filteredProjects = projectsList.filter(p => p.category === activeTab)

6. Flow Summary
- Active Tab → Filter Projects → Show UI



## Project Link: 
Check at https://projectsTabsR.ccbp.tech

- Identifying the State
- Updating the styles based on State 
