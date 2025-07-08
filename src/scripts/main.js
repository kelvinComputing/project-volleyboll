// Import Lucide icons library


// Initialize Lucide icons and load components when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons()
  loadComponents()
  initializeProgressBars()
})

// Load all components dynamically
// async function loadComponents() {
//   try {
//     const sidebarResponse = await fetch("components/sidebar.html")
//     const sidebarHTML = await sidebarResponse.text()
//     document.getElementById("sidebar-container").innerHTML = sidebarHTML

//     const headerResponse = await fetch("components/header.html")
//     const headerHTML = await headerResponse.text()
//     document.getElementById("header-container").innerHTML = headerHTML

//     const dashboardResponse = await fetch("modules/dashboard.html")
//     const dashboardHTML = await dashboardResponse.text()
//     document.getElementById("dashboard-module").innerHTML = dashboardHTML

//     const playersResponse = await fetch("modules/players.html")
//     const playersHTML = await playersResponse.text()
//     document.getElementById("players-module").innerHTML = playersHTML

//     const reportsResponse = await fetch("modules/reports.html")
//     const reportsHTML = await reportsResponse.text()
//     document.getElementById("reports-module").innerHTML = reportsHTML

//     const calendarResponse = await fetch("modules/calendar.html")
//     const calendarHTML = await calendarResponse.text()
//     document.getElementById("calendar-module").innerHTML = calendarHTML

//     const clubResponse = await fetch("modules/club.html")
//     const clubHTML = await clubResponse.text()
//     document.getElementById("club-module").innerHTML = clubHTML

//     const paymentsResponse = await fetch("modules/payments.html")
//     const paymentsHTML = await paymentsResponse.text()
//     document.getElementById("payments-module").innerHTML = paymentsHTML

//     const modalsResponse = await fetch("components/modals.html")
//     const modalsHTML = await modalsResponse.text()
//     document.getElementById("modals-container").innerHTML = modalsHTML

//     lucide.createIcons()

//     initializeSearchFunctionality()

    
//     initializeNavigation()
//   } catch (error) {
//     console.error("Error loading components:", error)
//   }
// }

// Initialize navigation event listeners
function initializeNavigation() {
  setTimeout(() => {
    const navButtons = document.querySelectorAll(".nav-item")
    navButtons.forEach((button) => {
      button.addEventListener("click", function (e) {
        e.preventDefault()
        const moduleId = this.getAttribute("onclick")?.match(/showModule$$'(.+?)'$$/)?.[1]
        if (moduleId) {
          showModule(moduleId)
        }
      })
    })
  }, 500)
}

// Navigation functionality with proper active state management
function showModule(moduleId) {
  // Hide all modules
  const modules = document.querySelectorAll(".module-content")
  modules.forEach((module) => {
    module.classList.add("hidden")
    module.classList.remove("fade-in")
  })

  // Show selected module with animation
  const targetModule = document.getElementById(moduleId + "-module")
  if (targetModule) {
    targetModule.classList.remove("hidden")
    setTimeout(() => {
      targetModule.classList.add("fade-in")
    }, 10)
  }

  // Update navigation active state
  const navItems = document.querySelectorAll(".nav-item")
  navItems.forEach((item) => {
    item.classList.remove("bg-blue-600", "text-white", "shadow-md")
    item.classList.add("text-gray-700", "hover:bg-blue-50", "hover:text-blue-600")
  })

  // Set active nav item
  const clickedButton = event?.target?.closest("button") || document.querySelector(`[onclick*="${moduleId}"]`)
  if (clickedButton) {
    clickedButton.classList.add("bg-blue-600", "text-white", "shadow-md")
    clickedButton.classList.remove("text-gray-700", "hover:bg-blue-50", "hover:text-blue-600")
  }

  // Update header title
  const headerTitle = document.querySelector("header h1")
  if (headerTitle) {
    const titles = {
      dashboard: "Dashboard",
      players: "Gestión de Jugadores",
      reports: "Reportes y Estadísticas",
      calendar: "Calendario de Eventos",
      club: "Información del Club",
      payments: "Gestión de Pagos",
    }
    headerTitle.textContent = titles[moduleId] || "Dashboard"
  }
}

// User menu toggle functionality
function toggleUserMenu() {
  const menu = document.getElementById("userMenu")
  if (menu) {
    menu.classList.toggle("hidden")
  }
}

// Close user menu when clicking outside
document.addEventListener("click", (event) => {
  const menu = document.getElementById("userMenu")
  const button = event.target.closest("button")

  if (menu && !menu.contains(event.target) && !button?.onclick?.toString().includes("toggleUserMenu")) {
    menu.classList.add("hidden")
  }
})

// Modal functions with improved animations
function openPlayerModal() {
  const modal = document.getElementById("playerModal")
  if (modal) {
    modal.classList.remove("hidden")
    // Add entrance animation
    setTimeout(() => {
      const modalContent = modal.querySelector(".bg-white")
      if (modalContent) {
        modalContent.classList.add("fade-in")
      }
    }, 10)
  }
}

function closePlayerModal() {
  const modal = document.getElementById("playerModal")
  if (modal) {
    modal.classList.add("hidden")
    const modalContent = modal.querySelector(".bg-white")
    if (modalContent) {
      modalContent.classList.remove("fade-in")
    }
  }
}

function openEventModal() {
  const modal = document.getElementById("eventModal")
  if (modal) {
    modal.classList.remove("hidden")
    setTimeout(() => {
      const modalContent = modal.querySelector(".bg-white")
      if (modalContent) {
        modalContent.classList.add("fade-in")
      }
    }, 10)
  }
}

function closeEventModal() {
  const modal = document.getElementById("eventModal")
  if (modal) {
    modal.classList.add("hidden")
    const modalContent = modal.querySelector(".bg-white")
    if (modalContent) {
      modalContent.classList.remove("fade-in")
    }
  }
}

function openPaymentModal() {
  const modal = document.getElementById("paymentModal")
  if (modal) {
    modal.classList.remove("hidden")
    setTimeout(() => {
      const modalContent = modal.querySelector(".bg-white")
      if (modalContent) {
        modalContent.classList.add("fade-in")
      }
    }, 10)
  }
}

function closePaymentModal() {
  const modal = document.getElementById("paymentModal")
  if (modal) {
    modal.classList.add("hidden")
    const modalContent = modal.querySelector(".bg-white")
    if (modalContent) {
      modalContent.classList.remove("fade-in")
    }
  }
}

// Close modals when clicking outside
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("modal-backdrop")) {
    const modals = document.querySelectorAll('[id$="Modal"]')
    modals.forEach((modal) => {
      modal.classList.add("hidden")
      const modalContent = modal.querySelector(".bg-white")
      if (modalContent) {
        modalContent.classList.remove("fade-in")
      }
    })
  }
})

// Initialize progress bars with smooth animation
function initializeProgressBars() {
  setTimeout(() => {
    const progressBars = document.querySelectorAll(".progress-bar")
    progressBars.forEach((bar) => {
      const targetWidth = bar.style.width
      bar.style.width = "0%"
      setTimeout(() => {
        bar.style.width = targetWidth
      }, 200)
    })
  }, 800)
}

// Enhanced search functionality
function initializeSearchFunctionality() {
  setTimeout(() => {
    const searchInputs = document.querySelectorAll('input[placeholder*="Buscar"]')
    searchInputs.forEach((input) => {
      input.addEventListener("input", function () {
        const searchTerm = this.value.toLowerCase()
        const container = this.closest(".bg-white")
        const table = container?.querySelector("table")

        if (table) {
          const rows = table.querySelectorAll("tbody tr")
          let visibleCount = 0

          rows.forEach((row) => {
            const text = row.textContent.toLowerCase()
            if (text.includes(searchTerm)) {
              row.style.display = ""
              row.classList.add("fade-in")
              visibleCount++
            } else {
              row.style.display = "none"
              row.classList.remove("fade-in")
            }
          })

          // Update result count if exists
          const countElement = container.querySelector('p[class*="text-sm text-gray-600"]')
          if (countElement && countElement.textContent.includes("encontrados")) {
            const originalText = countElement.textContent
            const entityType = originalText.includes("jugadores")
              ? "jugadores"
              : originalText.includes("pagos")
                ? "pagos"
                : "resultados"
            countElement.textContent = `${visibleCount} ${entityType} encontrados`
          }
        }
      })
    })
  }, 1000)
}

// Enhanced table interactions
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    // Add hover effects to table rows
    const tableRows = document.querySelectorAll("tbody tr")
    tableRows.forEach((row) => {
      row.addEventListener("mouseenter", function () {
        this.style.transform = "translateX(2px)"
        this.style.transition = "transform 0.2s ease"
      })
      row.addEventListener("mouseleave", function () {
        this.style.transform = "translateX(0)"
      })
    })

    // Add click effects to buttons
    const buttons = document.querySelectorAll("button")
    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        this.style.transform = "scale(0.98)"
        this.style.transition = "transform 0.1s ease"
        setTimeout(() => {
          this.style.transform = "scale(1)"
        }, 100)
      })
    })
  }, 1200)
})

// Form validation and submission
document.addEventListener("submit", (e) => {
  e.preventDefault()

  // Get form data
  const formData = new FormData(e.target)
  const formObject = Object.fromEntries(formData)

  // Simple validation
  const requiredFields = e.target.querySelectorAll("[required]")
  let isValid = true

  requiredFields.forEach((field) => {
    if (!field.value.trim()) {
      field.classList.add("border-red-500")
      isValid = false
    } else {
      field.classList.remove("border-red-500")
    }
  })

  if (isValid) {
    // Simulate form submission
    const submitButton = e.target.querySelector('button[type="submit"]')
    const originalText = submitButton.textContent

    submitButton.textContent = "Guardando..."
    submitButton.disabled = true

    setTimeout(() => {
      // Close modal and reset form
      const modal = e.target.closest('[id$="Modal"]')
      if (modal) {
        modal.classList.add("hidden")
        e.target.reset()
      }

      submitButton.textContent = originalText
      submitButton.disabled = false

      // Show success message
      showNotification("Datos guardados exitosamente", "success")
    }, 1500)
  }
})

// Notification system
function showNotification(message, type = "info") {
  const notification = document.createElement("div")
  notification.className = `fixed top-4 right-4 z-50 px-6 py-4 rounded-lg shadow-lg text-white transition-all duration-300 transform translate-x-full ${
    type === "success"
      ? "bg-green-600"
      : type === "error"
        ? "bg-red-600"
        : type === "warning"
          ? "bg-orange-600"
          : "bg-blue-600"
  }`

  notification.innerHTML = `
    <div class="flex items-center space-x-2">
      <i data-lucide="${
        type === "success"
          ? "check-circle"
          : type === "error"
            ? "x-circle"
            : type === "warning"
              ? "alert-triangle"
              : "info"
      }"></i>
      <span>${message}</span>
    </div>
  `

  document.body.appendChild(notification)
  lucide.createIcons()

  // Show notification
  setTimeout(() => {
    notification.classList.remove("translate-x-full")
  }, 100)

  // Hide notification after 3 seconds
  setTimeout(() => {
    notification.classList.add("translate-x-full")
    setTimeout(() => {
      document.body.removeChild(notification)
    }, 300)
  }, 3000)
}

// Calendar functionality
function initializeCalendar() {
  const calendarGrid = document.querySelector(".calendar-grid")
  if (!calendarGrid) return

  const today = new Date()
  const currentMonth = today.getMonth()
  const currentYear = today.getFullYear()

  // Generate calendar days
  const firstDay = new Date(currentYear, currentMonth, 1)
  const lastDay = new Date(currentYear, currentMonth + 1, 0)
  const daysInMonth = lastDay.getDate()
  const startingDayOfWeek = firstDay.getDay()

  let calendarHTML = ""

  // Add empty cells for days before the first day of the month
  for (let i = 0; i < startingDayOfWeek; i++) {
    calendarHTML += '<div class="p-2"></div>'
  }

  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const isToday = day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear()
    const hasEvent = Math.random() > 0.8 // Random events for demo

    calendarHTML += `
      <div class="p-2 border border-gray-200 min-h-[80px] ${isToday ? "bg-blue-100 border-blue-300" : "hover:bg-gray-50"} cursor-pointer transition-colors">
        <div class="font-semibold text-sm ${isToday ? "text-blue-600" : "text-gray-700"}">${day}</div>
        ${hasEvent ? '<div class="mt-1 text-xs bg-blue-500 text-white px-1 py-0.5 rounded">Evento</div>' : ""}
      </div>
    `
  }

  calendarGrid.innerHTML = calendarHTML
}

// Statistics animation
function animateStatistics() {
  const statNumbers = document.querySelectorAll(".stat-number")

  statNumbers.forEach((stat) => {
    const finalValue = Number.parseInt(stat.textContent)
    let currentValue = 0
    const increment = finalValue / 50

    const timer = setInterval(() => {
      currentValue += increment
      if (currentValue >= finalValue) {
        stat.textContent = finalValue
        clearInterval(timer)
      } else {
        stat.textContent = Math.floor(currentValue)
      }
    }, 30)
  })
}

// Chart initialization (placeholder for future chart library integration)
function initializeCharts() {
  const chartContainers = document.querySelectorAll(".chart-container")

  chartContainers.forEach((container) => {
    // Placeholder for chart initialization
    // You can integrate Chart.js, D3.js, or any other charting library here
    container.innerHTML = `
      <div class="flex items-center justify-center h-full text-gray-500">
        <div class="text-center">
          <i data-lucide="bar-chart-3" class="w-12 h-12 mx-auto mb-2"></i>
          <p>Gráfico disponible próximamente</p>
        </div>
      </div>
    `
  })

  lucide.createIcons()
}

// Export functionality
function exportData(format, moduleType) {
  showNotification(`Exportando datos en formato ${format.toUpperCase()}...`, "info")

  setTimeout(() => {
    showNotification(`Datos de ${moduleType} exportados exitosamente`, "success")
  }, 2000)
}

// Print functionality
function printReport(reportType) {
  showNotification(`Preparando reporte de ${reportType} para impresión...`, "info")

  setTimeout(() => {
    window.print()
  }, 1000)
}

// Initialize all functionality when components are loaded
setTimeout(() => {
  initializeCalendar()
  animateStatistics()
  initializeCharts()
}, 2000)

// Keyboard shortcuts
document.addEventListener("keydown", (e) => {
  // Ctrl/Cmd + K for search
  if ((e.ctrlKey || e.metaKey) && e.key === "k") {
    e.preventDefault()
    const searchInput = document.querySelector('input[placeholder*="Buscar"]')
    if (searchInput) {
      searchInput.focus()
    }
  }

  // Escape to close modals
  if (e.key === "Escape") {
    const openModals = document.querySelectorAll('[id$="Modal"]:not(.hidden)')
    openModals.forEach((modal) => {
      modal.classList.add("hidden")
    })

    const userMenu = document.getElementById("userMenu")
    if (userMenu && !userMenu.classList.contains("hidden")) {
      userMenu.classList.add("hidden")
    }
  }
})

// Responsive sidebar toggle for mobile
function toggleSidebar() {
  const sidebar = document.querySelector("aside")
  if (sidebar) {
    sidebar.classList.toggle("-translate-x-full")
  }
}

// Initialize mobile menu if needed
if (window.innerWidth < 768) {
  const mobileMenuButton = document.createElement("button")
  mobileMenuButton.className = "md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg"
  mobileMenuButton.innerHTML = '<i data-lucide="menu"></i>'
  mobileMenuButton.onclick = toggleSidebar
  document.body.appendChild(mobileMenuButton)
  lucide.createIcons()
}

// Window resize handler
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    const sidebar = document.querySelector("aside")
    if (sidebar) {
      sidebar.classList.remove("-translate-x-full")
    }
  }
})

// Performance monitoring
console.log("Volleyball Club Management System loaded successfully")
