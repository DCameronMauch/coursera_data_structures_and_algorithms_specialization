#!/usr/bin/env ruby

target, count = $stdin.readline.split(" ").map(&:to_i)
bars = $stdin.readline.split(" ").map(&:to_i)

db = []

(1..count).each do |ci|
  db[ci] = []

  (1..target).each do |ti|
    bar = bars[ci - 1]

    a = if (ci > 1)
      db[ci - 1][ti] || 0
    else
      0
    end

    b = if (bar <= ti)
      if (ci > 1)
        (db[ci - 1][ti - bar] || 0) + bar
      else
        bar
      end
    else
      0
    end

    db[ci][ti] = [a, b].max
  end
end

puts db[count][target]
