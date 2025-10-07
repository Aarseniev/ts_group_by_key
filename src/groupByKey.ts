type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce<GroupsMap<T>>((acc, item) => {
    const value = item[key];

    if (value === undefined || value === null) {
      return acc;
    }

    const group = String(item[key]);

    if (!acc[group]) {
      acc[group] = [];
    }

    acc[group].push(item);

    return acc;
  }, {});
}
