from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    # Verify homepage
    page.goto("http://localhost:3000/")
    page.screenshot(path="jules-scratch/verification/homepage.png")

    # Verify contact page
    page.goto("http://localhost:3000/contact")
    page.screenshot(path="jules-scratch/verification/contact_page.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)