#!/usr/bin/env ruby

data = $stdin.readline.split(" ").map(&:to_i)
data.shift

items = $stdin.readline.split(" ").map(&:to_i)
items.shift

results = items.map do |item|
  low = 0
  high = data.length - 1
  found = false

  until found do
    index = ((high - low) / 2).floor + low

    case data[index] <=> item
      when 1
        # p [low, index, high, 1]
        high = index - 1
      when -1
        # p [low, index, high, -1]
        low = index + 1
      when 0
        # p [low, index, high, 0]
        found = true
    end

    if high < low
      index = -1
      found = true
    end
  end

  index
end

puts results.join(" ")
