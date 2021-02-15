import type { Equation } from '../equations/Equation'
import type { World } from '../world/World'

/**
 * Constraint equation solver base class.
 */
export class Solver {
  /**
   * All equations to be solved
   */
  equations: Equation[]

  constructor() {
    this.equations = []
  }

  /**
   * Should be implemented in subclasses!
   * @return {Number} number of iterations performed
   */
  solve(dt: number, world: World): number {
    return (
      // Should return the number of iterations done!
      0
    )
  }

  /**
   * Add an equation
   */
  addEquation(eq: Equation): void {
    if (eq.enabled) {
      this.equations.push(eq)
    }
  }

  /**
   * Remove an equation
   */
  removeEquation(eq: Equation): void {
    const eqs = this.equations
    const i = eqs.indexOf(eq)
    if (i !== -1) {
      eqs.splice(i, 1)
    }
  }

  /**
   * Add all equations
   */
  removeAllEquations(): void {
    this.equations.length = 0
  }
}
