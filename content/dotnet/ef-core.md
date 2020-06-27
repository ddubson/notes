---
title: "EF Core"
date: 2020-06-27T13:53:07-04:00
draft: false
---

#### Save and return a single record async (EF Core 3.1.5)

```csharp
public async Task<Project> Save(Project project)
{
    await _context.Projects.AddAsync(project);
    await _context.SaveChangesAsync();
    return await _context.Projects.SingleAsync(p => p.Id == project.Id);
}
```
