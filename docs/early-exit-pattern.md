# Early Exit Pattern

## Resources:

[The faster you can fail, you faster you can success](https://medium.com/swlh/return-early-pattern-3d18a41bba8#:~:text=R%20eturn%20early%20is%20the,when%20conditions%20are%20not%20met.)

[Else Considered Smelly](http://wiki.c2.com/?ElseConsideredSmelly)

[Arrow Anti Pattern](http://wiki.c2.com/?ArrowAntiPattern)

## Resources shared by Jing

[refactoring guru](https://refactoring.guru/replace-nested-conditional-with-guard-clauses)

Try to get rid the code of side effects — [Separate Query from Modifier](https://refactoring.guru/separate-query-from-modifier)

see whether you can use [Consolidate Conditional Expression](https://refactoring.guru/consolidate-conditional-expression) for guard clauses that lead to the same exceptions or returned values.

## Questions:

1. What is Early Exit Pattern?

- Definition:

Return early is the way of writing functions or methods so that the expected positive result is returned at the end of the function and the rest of the code terminates the execution (by returning or throwing an exception) when conditions are not met.

2. When and where should we use Early Exit Pattern?

- with languages have the key word `return`
- when we would like to avoid nested if-else statement

3. Why can't we see Early Exit pattern in Scala?

- no key word `return`
- everything is expression
- if-else statement is essentially a ternary expression, like `xxx ? A : B`
- Scala has smart ways to deal with null values, e.g. having a `content` with type `Option`, we can do `content.map(raw => format(raw))` will just ignore the null branch.

## Code Demo

```
/src/demo
```
