const employees = [
  {
    "id": 1,
    "email": "employee1@e.com",
    "password": "123",
    "firstname": "Aarav",
    "tasks": [
      {
        "priority": "high",
        "date": "2025-01-26",
        "taskHeading": "Complete Project Report",
        "description": "Prepare and submit the final project report by end of the day.",
        "category": "Documentation",
        "active": true,
        "acceptTask": true,
        "failed": false,
        "complete": false,
        "status": "in progress"
      },
      {
        "priority": "low",
        "date": "2025-01-27",
        "taskHeading": "Review Budget",
        "description": "Review the quarterly budget for accuracy.",
        "category": "Finance",
        "active": true,
        "acceptTask": true,
        "failed": false,
        "complete": false,
        "status": "pending"
      }
    ],
    "taskCount": {
      "active": 2,
      "failed": 0,
      "complete": 0,
      "accepted": 2
    }
  },
  {
    "id": 2,
    "email": "employee2@e.com",
    "password": "123",
    "firstname": "Anika",
    "tasks": [
      {
        "priority": "medium",
        "date": "2025-01-27",
        "taskHeading": "Team Meeting",
        "description": "Attend the scheduled team meeting to discuss project updates.",
        "category": "Meetings",
        "active": true,
        "acceptTask": true,
        "failed": false,
        "complete": false,
        "status": "pending"
      },
      {
        "priority": "high",
        "date": "2025-01-28",
        "taskHeading": "Client Feedback Analysis",
        "description": "Analyze feedback from the latest client meeting.",
        "category": "Client Interaction",
        "active": true,
        "acceptTask": true,
        "failed": false,
        "complete": true,
        "status": "completed"
      },
      {
        "priority": "low",
        "date": "2025-01-29",
        "taskHeading": "Update Timesheet",
        "description": "Ensure timesheet is up-to-date for the previous week.",
        "category": "Administration",
        "active": false,
        "acceptTask": false,
        "failed": false,
        "complete": false,
        "status": "pending"
      }
    ],
    "taskCount": {
      "active": 2,
      "failed": 0,
      "complete": 1,
      "accepted": 2
    }
  },
  {
    "id": 3,
    "email": "employee3@e.com",
    "password": "123",
    "firstname": "Ishaan",
    "tasks": [
      {
        "priority": "medium",
        "date": "2025-01-30",
        "taskHeading": "Conduct Training Session",
        "description": "Conduct a training session on ReactJS for the new team.",
        "category": "Training",
        "active": true,
        "acceptTask": true,
        "failed": false,
        "complete": false,
        "status": "in progress"
      }
    ],
    "taskCount": {
      "active": 1,
      "failed": 0,
      "complete": 0,
      "accepted": 1
    }
  },
  {
    "id": 4,
    "email": "employee4@e.com",
    "password": "123",
    "firstname": "Riya",
    "tasks": [
      {
        "priority": "high",
        "date": "2025-01-29",
        "taskHeading": "Code Review",
        "description": "Review code submitted by the junior developer and provide feedback.",
        "category": "Code Review",
        "active": true,
        "acceptTask": true,
        "failed": false,
        "complete": false,
        "status": "in progress"
      },
      {
        "priority": "medium",
        "date": "2025-01-30",
        "taskHeading": "Draft User Documentation",
        "description": "Create user documentation for the new application release.",
        "category": "Documentation",
        "active": true,
        "acceptTask": true,
        "failed": false,
        "complete": false,
        "status": "in progress"
      },
      {
        "priority": "low",
        "date": "2025-01-31",
        "taskHeading": "Prepare Onboarding Materials",
        "description": "Prepare training materials for new hires.",
        "category": "HR",
        "active": true,
        "acceptTask": false,
        "failed": false,
        "complete": false,
        "status": "pending"
      }
    ],
    "taskCount": {
      "active": 3,
      "failed": 0,
      "complete": 0,
      "accepted": 2
    }
  },
  {
    "id": 5,
    "email": "employee5@e.com",
    "password": "123",
    "firstname": "Kavya",
    "tasks": [
      {
        "priority": "high",
        "date": "2025-01-30",
        "taskHeading": "Client Presentation",
        "description": "Prepare and deliver a presentation to the client about the new feature.",
        "category": "Client Interaction",
        "active": true,
        "acceptTask": true,
        "failed": false,
        "complete": false,
        "status": "in progress"
      },
      {
        "priority": "medium",
        "date": "2025-01-31",
        "taskHeading": "Project Planning",
        "description": "Plan project tasks and timelines for the next quarter.",
        "category": "Planning",
        "active": true,
        "acceptTask": true,
        "failed": false,
        "complete": false,
        "status": "pending"
      }
    ],
    "taskCount": {
      "active": 2,
      "failed": 0,
      "complete": 0,
      "accepted": 2
    }
  }
];

const admin = [
    {
      "id": 1,
      "firstname":"Admin",
      "email": "admin@me.com",
      "password": "123"
    }
];
  

export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees));
    localStorage.setItem('admin',JSON.stringify(admin));
}

export const getLocalStorage = ()=> {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees,admin}
}