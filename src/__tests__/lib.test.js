import { sum, mult } from "../lib"

// import log from "log"
// // eslint-disable-next-line @typescript-eslint/no-var-requires
// require("log-node")()

describe("Lib Tests", () => {
  it("Sum", async () => {
    expect(sum(1, 2)).toBe(3)
  })

  it("Mult", async () => {
    expect(mult(1, 2)).toBe(2)
  })
})
