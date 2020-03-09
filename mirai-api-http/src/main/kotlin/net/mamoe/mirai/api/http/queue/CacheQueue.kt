package net.mamoe.mirai.api.http.queue

import net.mamoe.mirai.event.events.BotEvent
import net.mamoe.mirai.message.MessagePacket
import net.mamoe.mirai.message.data.MessageSource
import net.mamoe.mirai.utils.firstKey

class CacheQueue : LinkedHashMap<Long, MessagePacket<*, *>>() {

    val cacheSize = 4096

    override fun get(key: Long): MessagePacket<*, *> = super.get(key) ?: throw NoSuchElementException()

    override fun put(key: Long, value: MessagePacket<*, *>): MessagePacket<*, *>? = super.put(key, value).also {
        if (size > cacheSize) {
            remove(firstKey())
        }
    }

    fun add(botEvent: BotEvent) {
        if (botEvent is MessagePacket<*, *>) {
            put(botEvent[MessageSource].id, botEvent)
        }
    }
}