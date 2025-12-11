import { Feather } from "@expo/vector-icons";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const LESSONS = [
  {
    id: "1",
    title: "Introduction",
    chinese: "介绍",
    icon: "globe",
    progress: 100,
  },
  {
    id: "2",
    title: "Introducing yourself",
    chinese: "自我介绍",
    icon: "user",
    progress: 100,
  },
  {
    id: "3",
    title: "Your jobs",
    chinese: "你的工作",
    icon: "briefcase",
    progress: 75,
  },
  {
    id: "4",
    title: "Nationality",
    chinese: "国籍",
    icon: "flag",
    progress: 50,
  },
  {
    id: "5",
    title: "Your family",
    chinese: "你的家庭",
    icon: "users",
    progress: 25,
  },
  {
    id: "6",
    title: "Number 1-10",
    chinese: "数字1-10",
    icon: "hash",
    progress: 80,
  },
  {
    id: "7",
    title: "Days and week",
    chinese: "日期和星期",
    icon: "calendar",
    progress: 30,
  },
  { id: "8", title: "Time", chinese: "时间", icon: "clock", progress: 10 },
  {
    id: "9",
    title: "Ordering foods",
    chinese: "点餐",
    icon: "coffee",
    progress: 0,
  },
  {
    id: "10",
    title: "Buying stuffs",
    chinese: "买东西",
    icon: "shopping-cart",
    progress: 0,
  },
  { id: "11", title: "Objects", chinese: "物品", icon: "package", progress: 0 },
  { id: "12", title: "Animals", chinese: "动物", icon: "github", progress: 0 },
  {
    id: "13",
    title: "Family life",
    chinese: "家庭生活",
    icon: "home",
    progress: 0,
  },
  {
    id: "14",
    title: "Shopping",
    chinese: "购物",
    icon: "shopping-bag",
    progress: 0,
  },
  { id: "15", title: "Health", chinese: "健康", icon: "heart", progress: 0 },
];

export default function LessonsScreen() {
  const completedCount = LESSONS.filter(
    (lesson) => lesson.progress === 100
  ).length;
  const inProgressCount = LESSONS.filter(
    (lesson) => lesson.progress > 0 && lesson.progress < 100
  ).length;
  const notStartedCount = LESSONS.filter(
    (lesson) => lesson.progress === 0
  ).length;

  return (
    <View style={styles.screen}>
      {/* Header - PURPLE */}
      <View style={styles.header}>
        <Text style={styles.title}>Chinese Lessons</Text>
        <Text style={styles.subtitle}>Start learning step by step</Text>

        <View style={styles.stats}>
          <View style={styles.stat}>
            <Text style={styles.statNum}>{completedCount}</Text>
            <Text style={styles.statLabel}>Completed</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.stat}>
            <Text style={styles.statNum}>{inProgressCount}</Text>
            <Text style={styles.statLabel}>In Progress</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.stat}>
            <Text style={styles.statNum}>{notStartedCount}</Text>
            <Text style={styles.statLabel}>Not Started</Text>
          </View>
        </View>
      </View>

      {/* Lessons List */}
      <ScrollView
        style={styles.list}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        {LESSONS.map((lesson, i) => (
          <TouchableOpacity
            key={lesson.id}
            style={styles.card}
            activeOpacity={0.7}>
            <View style={styles.numberBox}>
              <Text style={styles.number}>
                {(i + 1).toString().padStart(2, "0")}
              </Text>
            </View>

            <View style={styles.content}>
              <Text style={styles.engTitle}>{lesson.title}</Text>
              <Text style={styles.cnTitle}>{lesson.chinese}</Text>

              <View style={styles.progressRow}>
                <View style={styles.progressBar}>
                  <View
                    style={[styles.progress, { width: `${lesson.progress}%` }]}
                  />
                </View>
                <Text style={styles.status}>{lesson.progress}%</Text>
              </View>
            </View>

            <View style={styles.right}>
              <View style={styles.iconBox}>
                <Feather name={lesson.icon as any} size={20} color="#130057" />
              </View>
              <Feather
                name={
                  lesson.progress === 100 ? "check-circle" : "chevron-right"
                }
                size={20}
                color={lesson.progress === 100 ? "#4CAF50" : "#999"}
              />
            </View>
          </TouchableOpacity>
        ))}

        <View style={{ height: 20 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#f8f9fa" },
  header: {
    backgroundColor: "#130057",
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 30,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  title: { fontSize: 32, fontWeight: "bold", color: "#fff", marginBottom: 8 },
  subtitle: { fontSize: 16, color: "rgba(255,255,255,0.8)", marginBottom: 24 },

  stats: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },
  stat: { flex: 1, alignItems: "center" },
  statNum: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#130057",
    marginBottom: 4,
  },
  statLabel: { fontSize: 12, color: "#666", textTransform: "uppercase" },
  statDivider: { width: 1, backgroundColor: "#e0e0e0" },

  list: { flex: 1 },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  numberBox: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#f0f0ff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  number: { fontSize: 16, fontWeight: "bold", color: "#130057" },

  content: { flex: 1 },
  engTitle: { fontSize: 16, fontWeight: "600", color: "#333", marginBottom: 4 },
  cnTitle: { fontSize: 14, color: "#666", marginBottom: 12 },

  progressRow: { flexDirection: "row", alignItems: "center", gap: 12 },
  progressBar: {
    flex: 1,
    height: 4,
    backgroundColor: "#e0e0e0",
    borderRadius: 2,
    overflow: "hidden",
  },
  progress: { height: "100%", backgroundColor: "#130057", borderRadius: 2 },
  status: { fontSize: 12, color: "#666", minWidth: 40 },

  right: { flexDirection: "row", alignItems: "center", gap: 12 },
  iconBox: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
  },
});
