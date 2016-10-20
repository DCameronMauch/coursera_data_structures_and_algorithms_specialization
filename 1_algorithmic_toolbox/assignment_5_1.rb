#!/usr/bin/env ruby

target = $stdin.readline.to_i

db = {1 => [0, [1]]}

outputs = [0] + (2..target).map do |index|
  a = if (index > 1)
    steps, path = db[index - 1]
    [steps + 1, path + [index]]
  else
    nil
  end

  b = if (index > 1 && index % 2 == 0)
    steps, path = db[index / 2]
    [steps + 1, path + [index]]
  else
    nil
  end

  c = if (index > 2 && index % 3 == 0)
    steps, path = db[index / 3]
    [steps + 1, path + [index]]
  else
    nil
  end

  steps, path = [a, b, c].compact.min_by do |steps, path|
    steps
  end

  db[index] = [steps, path]
end

puts outputs.last[0]
puts outputs.last[1].join(" ")
