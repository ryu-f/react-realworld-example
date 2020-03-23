import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command'

/**
 * cypress-image-snapshot config
 */
addMatchImageSnapshotCommand({
  failureThreshold: 0.01,
  failureThresholdType: 'pixel',
  customDiffConfig: { threshold: 0.1 },
  capture: 'viewport',
  customSnapshotsDir: 'tests/e2e/snapshots',
  disableTimersAndAnimations: false
})

/**
 * viewportの高さでキャプチャを撮って、スクロール。スクロール値がコンテンツの高さを超えるまでキャプチャ
 */
Cypress.Commands.add('scrollScreenshotCommand', ({ name, scrollHeight }, options) => {
  cy.document().then(document => {
    let viewportHeight = Cypress.config('viewportHeight')
    if (scrollHeight) viewportHeight -= scrollHeight
    const height = document.body.clientHeight
    const snapshotLimit = 10
    let count = 0
    let scrollValue = 0

    /*eslint no-constant-condition: ["error", { "checkLoops": false }]*/
    while (true) {
      count++
      cy.scrollTo(0, scrollValue).wait(4000)
      cy.matchImageSnapshot(`${name}_${count}`, options)
      scrollValue += viewportHeight
      if (scrollValue > height || count >= snapshotLimit) break
    }
  })
})
